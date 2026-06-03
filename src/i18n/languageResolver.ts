import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY, LANGUAGE_URL_PREFIX } from "./i18n.constants";
import type { LanguageCode } from "./i18n.types";
import { isSupportedLanguage } from "./content";

export function resolveLanguageFromPath(pathname: string): LanguageCode {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment && isSupportedLanguage(firstSegment) ? firstSegment : DEFAULT_LANGUAGE;
}

export function buildLocalizedPath(language: LanguageCode, hash: string): string {
  const prefix = LANGUAGE_URL_PREFIX[language];
  return `${prefix || "/"}${hash || ""}`;
}

export function saveLanguagePreference(language: LanguageCode): void {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
}
