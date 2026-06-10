import { QUOTE_VALIDATION } from "./quoteForm.constants";
import type { QuoteFormData, QuoteFormErrors } from "./quoteForm.types";

type ValidationMessages = {
  required: string;
  invalidEmail: string;
  minMessage: string;
};

export class QuoteFormValidator {
  validate(
    formData: QuoteFormData,
    messages: ValidationMessages,
  ): QuoteFormErrors {
    const errors: QuoteFormErrors = {};

    this.required(formData.fullName, "fullName", errors, messages.required);
    this.required(formData.company, "company", errors, messages.required);
    this.required(formData.email, "email", errors, messages.required);
    this.required(
      formData.projectType,
      "projectType",
      errors,
      messages.required,
    );
    this.required(
      formData.budgetRange,
      "budgetRange",
      errors,
      messages.required,
    );
    this.required(formData.timeline, "timeline", errors, messages.required);
    this.required(
      formData.preferredContact,
      "preferredContact",
      errors,
      messages.required,
    );
    this.required(formData.message, "message", errors, messages.required);

    if (formData.email && !this.isValidEmail(formData.email)) {
      errors.email = messages.invalidEmail;
    }

    if (
      formData.message.trim().length > 0 &&
      formData.message.trim().length < QUOTE_VALIDATION.minimumMessageLength
    ) {
      errors.message = messages.minMessage;
    }

    return errors;
  }

  hasErrors(errors: QuoteFormErrors): boolean {
    return Object.keys(errors).length > 0;
  }

  private required(
    value: string,
    key: keyof QuoteFormData,
    errors: QuoteFormErrors,
    message: string,
  ): void {
    if (!value.trim()) {
      errors[key] = message;
    }
  }

  private isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
}