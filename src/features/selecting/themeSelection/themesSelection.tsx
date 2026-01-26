import { useNavigate } from "react-router-dom";
import { TQuizData } from "@shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import ThemeList from "./themeList";
import { CreationModeButton } from "@shared/types/commonTypes";
import { mainContainerStyles } from "./styles";
import PopoverBlock from "./popoverBlock";

const ThemesSelection = ({ course, buttonID, selectedTopics }: TQuizData) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleThemeClick = (theme: string, themeID: string) => {
    navigate("/formSelection", {
      state: { buttonID, course, theme, themeID },
    });
  };

  return (
    <div className="mx-auto w-full">
      <h1 className="pb-10 pt-12 text-xl font-bold">
        {t("header.themeSelection")} {course}
      </h1>
      <div className={mainContainerStyles}>
        <ThemeList handleThemeClick={handleThemeClick} selectedTopics={selectedTopics} />
        {buttonID !== CreationModeButton.EDITING && <PopoverBlock course={course} />}
      </div>
    </div>
  );
};
export default ThemesSelection;
