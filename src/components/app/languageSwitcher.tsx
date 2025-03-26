import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Меняем язык
  };

  return (
    <div className="flex h-[12vh] w-full flex-col items-end justify-evenly">
      <button
        onClick={() => changeLanguage("ru")}
        className="mr-4 min-w-[4.5vw] rounded-md bg-red-100 p-1 text-sm"
      >
        🇷🇺 Русский
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className="mr-4 min-w-[4.5vw] rounded-md bg-red-100 p-1 text-sm"
      >
        🇺🇸 English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
