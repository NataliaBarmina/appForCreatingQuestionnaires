import { useNavigate } from "react-router-dom";

import { CreateThemePopover } from "@features/create-theme-manually";
import { TTheme, ThemeCreationMode, ThemeList } from "@entities/theme";
import { QuestionCreationMode } from "@entities/question";

import { mainContainerStyles } from "../styles";

export const ThemesSelection = ({
  courseName,
  buttonID,
  selectedTopics,
}: {
  courseName: string;
  buttonID: QuestionCreationMode;
  selectedTopics: TTheme[];
}) => {
  const navigate = useNavigate();

  const handleThemeClick = (theme: TTheme) => {
    const { themeName, id } = theme;

    const state = {
      courseName,
      themeName,
      themeID: id,
    };

    if (buttonID === QuestionCreationMode.MANUAL) {
      navigate("/manualCreatingPage", { state });
      return;
    }

    if (buttonID === QuestionCreationMode.AI) {
      navigate("/formForCreatingQuestionsByAI", { state });
      return;
    }

    navigate("/editingQuestions", { state });
  };

  return (
    <div className="mx-auto w-full">
      <div className={mainContainerStyles}>
        <ThemeList
          selectedTopics={selectedTopics}
          courseName={courseName}
          buttonID={buttonID}
          handleThemeClick={handleThemeClick}
        />

        {(buttonID === QuestionCreationMode.AI || buttonID === QuestionCreationMode.MANUAL) && (
          <CreateThemePopover courseName={courseName} />
        )}
      </div>
    </div>
  );
};
