import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const TABLE_NAME = "quote_requests";

const HTTP_STATUS = {
  created: 201,
  badRequest: 400,
  methodNotAllowed: 405,
  serverError: 500,
} as const;

type QuotePayload = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  preferredContact: string;
  message: string;
  language: "en" | "ar";
};

type QuoteRecord = {
  full_name: string;
  company: string;
  email: string;
  phone: string | null;
  project_type: string;
  budget_range: string;
  timeline: string;
  preferred_contact: string;
  message: string;
  language: string;
  status: "NEW";
  source: "website";
};

type ApiResponse = {
  success: boolean;
  message: string;
};

class EnvironmentConfig {
  readonly supabaseUrl: string;
  readonly supabaseServiceRoleKey: string;
  readonly resendApiKey?: string;
  readonly quoteNotificationEmail?: string;
  readonly quoteFromEmail?: string;

  constructor(env: NodeJS.ProcessEnv) {
    this.supabaseUrl = this.required(env.SUPABASE_URL, "SUPABASE_URL");
    this.supabaseServiceRoleKey = this.required(
      env.SUPABASE_SERVICE_ROLE_KEY,
      "SUPABASE_SERVICE_ROLE_KEY",
    );

    this.resendApiKey = env.RESEND_API_KEY;
    this.quoteNotificationEmail = env.QUOTE_NOTIFICATION_EMAIL;
    this.quoteFromEmail = env.QUOTE_FROM_EMAIL;
  }

  private required(value: string | undefined, key: string): string {
    if (!value) {
      throw new Error(`Missing ${key}`);
    }

    return value;
  }
}

class QuoteValidator {
  private readonly minMessageLength = 20;

  validate(payload: Partial<QuotePayload>): string[] {
    const errors: string[] = [];

    this.required(payload.fullName, "fullName", errors);
    this.required(payload.company, "company", errors);
    this.required(payload.email, "email", errors);
    this.required(payload.projectType, "projectType", errors);
    this.required(payload.budgetRange, "budgetRange", errors);
    this.required(payload.timeline, "timeline", errors);
    this.required(payload.preferredContact, "preferredContact", errors);
    this.required(payload.message, "message", errors);
    this.required(payload.language, "language", errors);

    if (payload.email && !this.isEmail(payload.email)) {
      errors.push("email is invalid");
    }

    if (
      payload.message &&
      payload.message.trim().length < this.minMessageLength
    ) {
      errors.push("message is too short");
    }

    if (
      payload.language &&
      payload.language !== "en" &&
      payload.language !== "ar"
    ) {
      errors.push("language is invalid");
    }

    return errors;
  }

  private required(
    value: string | undefined,
    fieldName: string,
    errors: string[],
  ): void {
    if (!value || value.trim().length === 0) {
      errors.push(`${fieldName} is required`);
    }
  }

  private isEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
}

class QuoteMapper {
  toRecord(payload: QuotePayload): QuoteRecord {
    return {
      full_name: payload.fullName.trim(),
      company: payload.company.trim(),
      email: payload.email.trim().toLowerCase(),
      phone: payload.phone.trim() || null,
      project_type: payload.projectType,
      budget_range: payload.budgetRange,
      timeline: payload.timeline,
      preferred_contact: payload.preferredContact,
      message: payload.message.trim(),
      language: payload.language,
      status: "NEW",
      source: "website",
    };
  }
}

class QuoteRepository {
  constructor(
    private readonly supabaseUrl: string,
    private readonly serviceRoleKey: string,
  ) { }

  async create(record: QuoteRecord): Promise<void> {
    const response = await fetch(`${this.supabaseUrl}/rest/v1/${TABLE_NAME}`, {
      method: "POST",
      headers: {
        apikey: this.serviceRoleKey,
        Authorization: `Bearer ${this.serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(record),
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }
  }
}

class QuoteEmailService {
  constructor(
    private readonly resendApiKey?: string,
    private readonly toEmail?: string,
    private readonly fromEmail?: string,
  ) { }

  async notify(payload: QuotePayload): Promise<void> {
    if (!this.resendApiKey || !this.toEmail || !this.fromEmail) {
      console.error("EMAIL_CONFIG_MISSING", {
        hasApiKey: Boolean(this.resendApiKey),
        hasToEmail: Boolean(this.toEmail),
        hasFromEmail: Boolean(this.fromEmail),
      });

      return;
    }

    const resend = new Resend(this.resendApiKey);

    const result = await resend.emails.send({
      from: this.fromEmail,
      to: this.toEmail,
      replyTo: payload.email,
      subject: `New SFS Quote Request - ${payload.company}`,
      text: this.buildEmailBody(payload),
    });

    console.log("RESEND_RESULT", result);

    if (result.error) {
      throw new Error(result.error.message);
    }
  }

  private buildEmailBody(payload: QuotePayload): string {
    return [
      "New quote request from SystemForge Studio website.",
      "",
      `Name: ${payload.fullName}`,
      `Company: ${payload.company}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "-"}`,
      `Project Type: ${payload.projectType}`,
      `Budget Range: ${payload.budgetRange}`,
      `Timeline: ${payload.timeline}`,
      `Preferred Contact: ${payload.preferredContact}`,
      `Language: ${payload.language}`,
      "",
      "Message:",
      payload.message,
    ].join("\n");
  }
}

class QuoteController {
  private readonly validator = new QuoteValidator();
  private readonly mapper = new QuoteMapper();

  constructor(
    private readonly repository: QuoteRepository,
    private readonly emailService: QuoteEmailService,
  ) { }

  async handle(
    req: VercelRequest,
    res: VercelResponse,
  ): Promise<void> {
    if (req.method !== "POST") {
      res.status(HTTP_STATUS.methodNotAllowed).json({
        success: false,
        message: "Method not allowed",
      });
      return;
    }

    const payload = req.body as Partial<QuotePayload>;
    const errors = this.validator.validate(payload);

    if (errors.length > 0) {
      res.status(HTTP_STATUS.badRequest).json({
        success: false,
        message: errors.join(", "),
      });
      return;
    }

    const validPayload = payload as QuotePayload;

    await this.repository.create(this.mapper.toRecord(validPayload));

    void this.emailService.notify(validPayload).catch((error) => {
      console.error("QUOTE_EMAIL_ERROR:", error);
    });

    res.status(HTTP_STATUS.created).json({
      success: true,
      message: "Quote request submitted successfully",
    });
  }
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  try {
    const config = new EnvironmentConfig(process.env);

    const controller = new QuoteController(
      new QuoteRepository(config.supabaseUrl, config.supabaseServiceRoleKey),
      new QuoteEmailService(
        config.resendApiKey,
        config.quoteNotificationEmail,
        config.quoteFromEmail,
      ),
    );

    await controller.handle(req, res);
  } catch (error) {
    console.error("QUOTE_API_ERROR:", error);

    res.status(HTTP_STATUS.serverError).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Unable to submit quote request",
    });
  }
}