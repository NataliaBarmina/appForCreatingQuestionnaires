import { useNavigate } from "react-router-dom";

import { CreateThemePopover } from "@features/create-theme-manually";
import { TTheme, CreationMode, ThemeList } from "@entities/theme";

import { mainContainerStyles } from "../styles";

export const ThemesSelection = ({
  courseName,
  buttonID,
  selectedTopics,
}: {
  courseName: string;
  buttonID: CreationMode;
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

    if (buttonID === CreationMode.MANUAL_QUESTIONS) {
      navigate("/manualCreatingPage", { state });
      return;
    }

    if (buttonID === CreationMode.AI_QUESTIONS) {
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

        {(buttonID === CreationMode.AI_QUESTIONS || buttonID === CreationMode.MANUAL_QUESTIONS) && (
          <CreateThemePopover courseName={courseName} />
        )}
      </div>
    </div>
  );
};
