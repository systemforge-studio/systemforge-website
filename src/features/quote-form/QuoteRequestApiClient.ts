import { QUOTE_API } from "./quoteForm.constants";
import type { QuoteFormData } from "./quoteForm.types";
import type { LanguageCode } from "../../i18n/i18n.types";

export type QuoteRequestResult = {
  success: boolean;
  message: string;
};

export class QuoteRequestApiClient {
  async submit(
    formData: QuoteFormData,
    language: LanguageCode,
  ): Promise<QuoteRequestResult> {
    const response = await fetch(QUOTE_API.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        language,
      }),
    });

    return response.json() as Promise<QuoteRequestResult>;
  }
}