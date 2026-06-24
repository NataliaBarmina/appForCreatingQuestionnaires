import { useTranslation } from "react-i18next";
import { containerStyles, buttonStyles } from "./styles";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Меняем язык
  };

  return (
    <div className={containerStyles}>
      <button onClick={() => changeLanguage("ru")} className={buttonStyles}>
        🇷🇺 Русский
      </button>
      <button onClick={() => changeLanguage("en")} className={buttonStyles}>
        🇺🇸 English
      </button>
    </div>
  );
};
