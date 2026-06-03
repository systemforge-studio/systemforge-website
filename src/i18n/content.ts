import { enContent } from "./locales/en";
import { arContent } from "./locales/ar";
import { zhCnContent } from "./locales/zhCN";
import { SUPPORTED_LANGUAGES } from "./i18n.constants";
import type { LanguageCode, SiteContent } from "./i18n.types";

const CONTENT_BY_LANGUAGE: Partial<Record<LanguageCode, SiteContent>> = {
  en: enContent,
  ar: arContent,
  "zh-cn": zhCnContent,
};

export function isSupportedLanguage(value: string): value is LanguageCode {
  return SUPPORTED_LANGUAGES.includes(value as LanguageCode);
}

export function getSiteContent(language: LanguageCode): SiteContent {
  return CONTENT_BY_LANGUAGE[language] ?? enContent;
}
