import { useTranslation } from "react-i18next";

export const containerSwitcherStyles = "flex h-[12vh] flex-col items-end justify-evenly";
export const buttonLanguageStyles = "mr-4 w-[5rem] rounded-md bg-red-100 p-1 text-[0.8rem]";

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  async function changeLanguage(language: string) {
    await i18n.changeLanguage(language);
  }
  return (
    <div className={containerSwitcherStyles}>
      <button type="button" className={buttonLanguageStyles} onClick={() => changeLanguage("ru")}>
        🇷🇺 Русский
      </button>

      <button type="button" className={buttonLanguageStyles} onClick={() => changeLanguage("en")}>
        🇺🇸 English
      </button>
    </div>
  );
};
