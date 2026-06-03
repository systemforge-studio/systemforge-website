import type { LanguageCode } from "./i18n.types";

export const DEFAULT_LANGUAGE: LanguageCode = "en";
export const SUPPORTED_LANGUAGES: readonly LanguageCode[] = ["en", "ar", "zh-cn", "zh-tw"] as const;

export const LANGUAGE_LABELS: Record<LanguageCode, string> = {
  en: "English",
  ar: "العربية",
  "zh-cn": "简体中文",
  "zh-tw": "臺灣正體",
};

export const LANGUAGE_URL_PREFIX: Record<LanguageCode, string> = {
  en: "",
  ar: "/ar",
  "zh-cn": "/zh-cn",
  "zh-tw": "/zh-tw",
};

export const LANGUAGE_STORAGE_KEY = "sfs.language";
