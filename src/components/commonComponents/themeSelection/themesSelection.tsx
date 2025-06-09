import { useNavigate } from "react-router-dom";
import Button from "@commonComponents/buttons";
import { TQuizData, TQuestion } from "@store/commonTypes";
import { useTranslation } from "react-i18next";
import ThemeList from "./themeList";
import { cn } from "@lib/utils";
import { CreationModeButton } from "@store/commonTypes";

const mainContainerSTyles = cn(
  "mx-auto w-full rounded-none bg-green-800",
  "px-0 py-[20px] pb-[25px]",
  "sm:w-[90%] sm:rounded-[15px]",
);
const ThemesSelection = ({
  course, // название курса
  arrayWithSelectedThemes, // массив- [{тема1: Array(2)},{тема2: Array(2)} }
  buttonID,
}: TQuizData) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleThemeClick = (theme: string, questions: TQuestion[]) => {
    navigate("/formSelection", {
      state: { buttonID, course, questions, theme },
    });
  };

  const handleAddThemeClick = () => {
    navigate("/formSelection", {
      state: { buttonID, course, arrayWithSelectedThemes },
    });
  };

  return (
    <div className="mx-auto w-full">
      <h1 className="pb-10 pt-12 text-xl font-bold">
        {t("header.themeSelection")} {course}
      </h1>
      <div className={mainContainerSTyles}>
        <ThemeList
          arrayWithSelectedThemes={arrayWithSelectedThemes}
          handleThemeClick={handleThemeClick}
        />
        {buttonID !== CreationModeButton.EDITING && (
          <Button
            onClick={() => handleAddThemeClick()}
            buttonLabel={t("buttonLabel.addTheme")}
            disabled={false}
            type="button"
            size="middle"
          />
        )}
      </div>
    </div>
  );
};
export default ThemesSelection;
