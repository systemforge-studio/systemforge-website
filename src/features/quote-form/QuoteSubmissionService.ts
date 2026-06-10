import type { LanguageCode } from "../../i18n/i18n.types";
import type { QuoteFormData } from "./quoteForm.types";
import {
  QuoteRequestApiClient,
  type QuoteRequestResult,
} from "./QuoteRequestApiClient";

export class QuoteSubmissionService {
  private readonly apiClient: QuoteRequestApiClient;

  constructor(apiClient = new QuoteRequestApiClient()) {
    this.apiClient = apiClient;
  }

  submit(
    formData: QuoteFormData,
    language: LanguageCode,
  ): Promise<QuoteRequestResult> {
    return this.apiClient.submit(formData, language);
  }
}