import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from "../../i18n/i18n.constants";
import { buildLocalizedPath } from "../../i18n/languageResolver";
import type { LanguageCode } from "../../i18n/i18n.types";
import { useLanguage } from "../../i18n/useLanguage";

export function LanguageSwitcher() {
  const { language, setLanguage, content } = useLanguage();

  function handleLanguageClick(nextLanguage: LanguageCode) {
    setLanguage(nextLanguage);
    window.history.pushState({}, "", buildLocalizedPath(nextLanguage, window.location.hash));
  }

  return (
    <div aria-label={content.languageSwitcher.ariaLabel} className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
      {SUPPORTED_LANGUAGES.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => handleLanguageClick(item)}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
            language === item ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"
          }`}
          aria-pressed={language === item}
        >
          {LANGUAGE_LABELS[item]}
        </button>
      ))}
    </div>
  );
}
