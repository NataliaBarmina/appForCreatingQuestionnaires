import { useNavigate } from "react-router-dom";
import { TQuizData, TQuestion } from "@store/commonTypes";
import { useTranslation } from "react-i18next";
import ThemeList from "./themeList";
import { CreationModeButton } from "@store/commonTypes";
import { mainContainerStyles } from "./styles";
import PopoverBlock from "./popoverBlock";

const ThemesSelection = ({
  course,
  buttonID,
  selectedTopicName,
}: TQuizData) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleThemeClick = (theme: string) => {
    navigate("/formSelection", {
      state: { buttonID, course, theme },
    });
  };

  return (
    <div className="mx-auto w-full">
      <h1 className="pb-10 pt-12 text-xl font-bold">
        {t("header.themeSelection")} {course}
      </h1>
      <div className={mainContainerStyles}>
        <ThemeList
          selectedTopicName={selectedTopicName}
          handleThemeClick={handleThemeClick}
        />
        {buttonID !== CreationModeButton.EDITING && (
          <PopoverBlock course={course} />
        )}
      </div>
    </div>
  );
};
export default ThemesSelection;
