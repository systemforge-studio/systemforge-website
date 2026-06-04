import { useEffect, useMemo, useState, type ReactNode } from "react";
import { getSiteContent } from "./content";
import { resolveLanguageFromPath, saveLanguagePreference } from "./languageResolver";
import type { LanguageCode } from "./i18n.types";
import { LanguageContext, type LanguageContextValue } from "./LanguageContext";

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<LanguageCode>(() => resolveLanguageFromPath(window.location.pathname));
  const content = useMemo(() => getSiteContent(language), [language]);

  useEffect(() => {
    document.documentElement.lang = content.htmlLang;
    document.documentElement.dir = content.direction;
  }, [content.direction, content.htmlLang]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    content,
    setLanguage(nextLanguage) {
      saveLanguagePreference(nextLanguage);
      setLanguageState(nextLanguage);
    },
  }), [content, language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

