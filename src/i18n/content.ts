import { enContent } from "./locales/en";
import { arContent } from "./locales/ar";
import { zhCnContent } from "./locales/zhCN";
import { zhTwContent } from "./locales/zhTW";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./i18n.constants";
import type { LanguageCode, LocaleContent, SiteContent } from "./i18n.types";

const CONTENT_BY_LANGUAGE: Partial<Record<LanguageCode, LocaleContent>> = {
  en: enContent,
  ar: arContent,
  "zh-cn": zhCnContent,
  "zh-tw": zhTwContent,
};

function isObjectRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeWithEnglishFallback<T>(fallback: T, override: unknown): T {
  if (override === undefined) {
    return fallback;
  }

  if (Array.isArray(fallback)) {
    if (!Array.isArray(override)) {
      return fallback;
    }

    const maxLength = Math.max(fallback.length, override.length);

    return Array.from({ length: maxLength }, (_, index) => {
      const fallbackItem = fallback[index];
      const overrideItem = override[index];

      if (fallbackItem === undefined) {
        return overrideItem;
      }

      return mergeWithEnglishFallback(fallbackItem, overrideItem);
    }) as T;
  }

  if (isObjectRecord(fallback)) {
    if (!isObjectRecord(override)) {
      return fallback;
    }

    const merged: Record<string, unknown> = { ...fallback };

    Object.entries(override).forEach(([key, value]) => {
      merged[key] =
        key in fallback
          ? mergeWithEnglishFallback(fallback[key], value)
          : value;
    });

    return merged as T;
  }

  return override as T;
}

export function isSupportedLanguage(value: string): value is LanguageCode {
  return SUPPORTED_LANGUAGES.includes(value as LanguageCode);
}

export function getSiteContent(language: LanguageCode): SiteContent {
  if (language === DEFAULT_LANGUAGE) {
    return enContent;
  }

  return mergeWithEnglishFallback(enContent, CONTENT_BY_LANGUAGE[language]);
}
