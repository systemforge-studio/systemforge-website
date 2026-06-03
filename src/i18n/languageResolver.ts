import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY, LANGUAGE_URL_PREFIX } from "./i18n.constants";
import type { LanguageCode } from "./i18n.types";
import { isSupportedLanguage } from "./content";

function getBasePath(): string {
  const basePath = import.meta.env.BASE_URL || "/";

  if (basePath === "./") {
    return "/";
  }

  const absolutePath = basePath.startsWith("/") ? basePath : `/${basePath}`;
  return absolutePath.endsWith("/") ? absolutePath : `${absolutePath}/`;
}

function getPathSegments(pathname: string): string[] {
  const pathSegments = pathname.split("/").filter(Boolean);
  const baseSegments = getBasePath().split("/").filter(Boolean);
  const hasBasePrefix = baseSegments.every((segment, index) => pathSegments[index] === segment);

  return hasBasePrefix ? pathSegments.slice(baseSegments.length) : pathSegments;
}

export function resolveLanguageFromPath(pathname: string): LanguageCode {
  const firstSegment = getPathSegments(pathname)[0];
  return firstSegment && isSupportedLanguage(firstSegment) ? firstSegment : DEFAULT_LANGUAGE;
}

export function buildLocalizedPath(language: LanguageCode, hash: string): string {
  const prefix = LANGUAGE_URL_PREFIX[language].replace(/^\/+/, "");
  const localizedPath = prefix ? `${getBasePath()}${prefix}` : getBasePath();

  return `${localizedPath}${hash || ""}`;
}

export function saveLanguagePreference(language: LanguageCode): void {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
}
