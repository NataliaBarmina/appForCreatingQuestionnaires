import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Меняем язык
  };

  const containerStyles =
    "flex h-[12vh] w-full flex-col items-end justify-evenly";
  const buttonStyles = "mr-4 rounded-md bg-red-100 p-1 w-[5rem] text-[0.8rem]";

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

export default LanguageSwitcher;
