import { enContent } from "./locales/en";
import { arContent } from "./locales/ar";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./i18n.constants";
import type { LanguageCode, SiteContent } from "./i18n.types";

const CONTENT_BY_LANGUAGE: Record<LanguageCode, SiteContent> = {
  en: enContent,
  ar: arContent,
};

export function isSupportedLanguage(value: string): value is LanguageCode {
  return SUPPORTED_LANGUAGES.includes(value as LanguageCode);
}

export function getSiteContent(language: LanguageCode): SiteContent {
  return CONTENT_BY_LANGUAGE[language] ?? CONTENT_BY_LANGUAGE[DEFAULT_LANGUAGE];
}
