import {ChevronDown, Languages} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {LANGUAGE_LABELS, SUPPORTED_LANGUAGES} from "../../i18n/i18n.constants";
import {buildLocalizedPath} from "../../i18n/languageResolver";
import type {LanguageCode} from "../../i18n/i18n.types";
import {useLanguage} from "../../i18n/LanguageProvider";

export function LanguageSwitcher() {
  const {language, setLanguage, content} = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, []);

  function handleLanguageClick(nextLanguage: LanguageCode) {
    setLanguage(nextLanguage);
    setIsOpen(false);
    window.history.pushState({}, "", buildLocalizedPath(nextLanguage, window.location.hash));
  }

  return (
    <div ref={containerRef} className="relative inline-flex">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex h-10 min-w-36 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:bg-white/10 hover:text-white"
        aria-label={content.languageSwitcher.ariaLabel}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <Languages className="h-4 w-4 text-cyan-200" aria-hidden="true"/>
        <span className="whitespace-nowrap">{LANGUAGE_LABELS[language]}</span>
        <ChevronDown
          className={`h-4 w-4 text-slate-300 transition ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          className="absolute end-0 top-12 z-50 min-w-40 rounded-lg border border-white/10 bg-slate-950/95 p-1 shadow-2xl shadow-slate-950/40 backdrop-blur-xl"
          role="menu"
        >
          {SUPPORTED_LANGUAGES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleLanguageClick(item)}
              className={`flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm font-semibold transition ${
                language === item
                  ? "bg-cyan-300 text-slate-950"
                  : "text-slate-200 hover:bg-white/10 hover:text-white"
              }`}
              aria-pressed={language === item}
              role="menuitem"
            >
              <span className="whitespace-nowrap">{LANGUAGE_LABELS[item]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
