import { useLocation } from "react-router-dom";
import { ManualCreatingPage } from "@pages/creating";
import { QuestionList } from "@pages/editing/questionList";
import { TTopic } from "@shared/types/commonTypes";
import { CreationModeButton } from "@shared/types/commonTypes";
import { FormForCreatingQuestionsByAI } from "@pages/creating";

export const FormSelection = () => {
  const location = useLocation();

  const { buttonID, courseName, themeName, themeID }: TTopic = location.state || {};

  return (
    <div>
      {buttonID === CreationModeButton.MANUAL && (
        <ManualCreatingPage courseName={courseName} themeName={themeName} themeID={themeID} />
      )}
      {buttonID === CreationModeButton.AI && (
        <FormForCreatingQuestionsByAI
          courseName={courseName}
          themeName={themeName}
          themeID={themeID}
        />
      )}
      {buttonID !== CreationModeButton.AI && buttonID !== CreationModeButton.MANUAL && (
        <QuestionList courseName={courseName} themeName={themeName} themeID={themeID} />
      )}
    </div>
  );
};
