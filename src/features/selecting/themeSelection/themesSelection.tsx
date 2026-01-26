import { useNavigate } from "react-router-dom";
import { TTopic } from "@shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { ThemeList } from "./themeList";
import { CreationModeButton } from "@shared/types/commonTypes";
import { mainContainerStyles } from "./styles";
import { PopoverBlock } from "./popoverBlock";

type TThemeSelection = {
  courseName: string;
  buttonID: string;
  selectedTopics: Array<Partial<TTopic>>;
};

export const ThemesSelection = ({ courseName, buttonID, selectedTopics }: TThemeSelection) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleThemeClick = (themeName: string, themeID: string) => {
    navigate("/formSelection", {
      state: { buttonID, courseName, themeName, themeID },
    });
  };

  return (
    <div className="mx-auto w-full">
      <h1 className="pb-10 pt-12 text-xl font-bold">
        {t("header.themeSelection")} {courseName}
      </h1>
      <div className={mainContainerStyles}>
        <ThemeList handleThemeClick={handleThemeClick} selectedTopics={selectedTopics} />
        {buttonID !== CreationModeButton.EDITING && <PopoverBlock courseName={courseName} />}
      </div>
    </div>
  );
};
