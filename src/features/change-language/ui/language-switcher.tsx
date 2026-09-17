import { useTranslation } from "react-i18next";

import { languages } from "../config/languages";
import { containerStyles, getLanguageButtonStyles } from "./styles";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language.startsWith("ru") ? "ru" : "en";

  const changeLanguage = (language: "ru" | "en") => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={containerStyles}>
      {languages.map(({ code, label }) => {
        const isActive = currentLanguage === code;

        return (
          <button
            key={code}
            type="button"
            onClick={() => changeLanguage(code)}
            aria-pressed={isActive}
            className={getLanguageButtonStyles(isActive)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
