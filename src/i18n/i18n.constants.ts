import type { LanguageCode } from "./i18n.types";

export const DEFAULT_LANGUAGE: LanguageCode = "en";
export const SUPPORTED_LANGUAGES: readonly LanguageCode[] = ["en", "ar"] as const;

export const LANGUAGE_LABELS: Record<LanguageCode, string> = {
  en: "English",
  ar: "العربية",
};

export const LANGUAGE_URL_PREFIX: Record<LanguageCode, string> = {
  en: "",
  ar: "/ar",
};

export const LANGUAGE_STORAGE_KEY = "sfs.language";
