import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from "../../i18n/i18n.constants";
import { buildLocalizedPath } from "../../i18n/languageResolver";
import type { LanguageCode } from "../../i18n/i18n.types";
import { useLanguage } from "../../i18n/useLanguage";
import { LANGUAGE_SWITCHER_CLASSES } from "../styles/languageSwitcher.styles";

export function LanguageSwitcher() {
  const { language, setLanguage, content } = useLanguage();

  function handleLanguageClick(nextLanguage: LanguageCode) {
    setLanguage(nextLanguage);
    window.history.pushState({}, "", buildLocalizedPath(nextLanguage, window.location.hash));
  }

  return (
    <div aria-label={content.languageSwitcher.ariaLabel} className={LANGUAGE_SWITCHER_CLASSES.wrapper}>
      {SUPPORTED_LANGUAGES.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => handleLanguageClick(item)}
          className={`${LANGUAGE_SWITCHER_CLASSES.button} ${language === item
              ? LANGUAGE_SWITCHER_CLASSES.activeButton
              : LANGUAGE_SWITCHER_CLASSES.inactiveButton
            }`}
          aria-pressed={language === item}
        >
          {LANGUAGE_LABELS[item]}
        </button>
      ))}
    </div>
  );
}
