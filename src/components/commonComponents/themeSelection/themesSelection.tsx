import { useNavigate } from "react-router-dom";
import Button from "@commonComponents/buttons";
import { TQuizData, TQuestion } from "@store/commonTypes";
import { useTranslation } from "react-i18next";
import ThemeList from "./themeList";
import { CreationModeButton } from "@store/commonTypes";
import { mainContainerStyles } from "./styles";
import PopoverBlock from "./popoverBlock";

const ThemesSelection = ({
  course, // название курса
  selectedThemes, // массив- [{тема1: Array(2)},{тема2: Array(2)} }
  buttonID,
}: TQuizData) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleThemeClick = (theme: string, questions: TQuestion[]) => {
    navigate("/formSelection", {
      state: { buttonID, course, questions, theme },
    });
  };

  // const handleAddThemeClick = () => {
  //   navigate("/formSelection", {
  //     state: { buttonID, course, selectedThemes },
  //   });
  // };

  return (
    <div className="mx-auto w-full">
      <h1 className="pb-10 pt-12 text-xl font-bold">
        {t("header.themeSelection")} {course}
      </h1>
      <div className={mainContainerStyles}>
        <ThemeList
          selectedThemes={selectedThemes}
          handleThemeClick={handleThemeClick}
        />
        {buttonID !== CreationModeButton.EDITING && (
          // <Button
          //   onClick={() => handleAddThemeClick()}
          //   buttonLabel={t("buttonLabel.addTheme")}
          //   disabled={false}
          //   type="button"
          //   size="middle"
          // />
          <PopoverBlock course={course} />
        )}
      </div>
    </div>
  );
};
export default ThemesSelection;
