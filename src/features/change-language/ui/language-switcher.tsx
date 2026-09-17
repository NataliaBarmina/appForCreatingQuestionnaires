import { useTranslation } from "react-i18next";
import { cn } from "@shared/lib";
import { languages } from "../config/languages";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language.startsWith("ru") ? "ru" : "en";

  const changeLanguage = (language: "ru" | "en") => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="mr-4 flex rounded-md border border-white/30 text-xs md:text-sm">
      {languages.map(({ code, label }) => {
        const isActive = currentLanguage === code;

        return (
          <button
            key={code}
            type="button"
            onClick={() => changeLanguage(code)}
            aria-pressed={isActive}
            className={cn(
              "flex justify-center",
              "min-w-12 rounded-md p-1 md:py-2",
              "transition-colors duration-200",
              "hover:bg-[#FCA5A5]/20 focus:bg-[#FCA5A5]/80",
              isActive ? "bg-[#FCA5A5] text-[#172626]" : "text-white/70"
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
