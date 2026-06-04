import { createContext } from "react";
import type { LanguageCode, SiteContent } from "./i18n.types";

export type LanguageContextValue = {
  language: LanguageCode;
  content: SiteContent;
  setLanguage: (language: LanguageCode) => void;
};

export const LanguageContext =
  createContext<LanguageContextValue | null>(null);