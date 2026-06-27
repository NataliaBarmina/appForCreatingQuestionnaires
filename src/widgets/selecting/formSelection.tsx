import { useLocation } from "react-router-dom";
import { FormForCreatingQuestionsYourself } from "../../pages/creating";
import { QuestionList } from "../../pages/editing/questionList";
import { TTopic } from "@shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { CreationModeButton } from "@shared/types/commonTypes";
import { FormForCreatingQuestionsByAI } from "../../pages/creating";

export const FormSelection = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const { buttonID, courseName, themeName, themeID }: TTopic = location.state || {};

  return (
    <div>
      {buttonID === CreationModeButton.MANUAL && (
        <FormForCreatingQuestionsYourself
          courseName={courseName}
          themeName={themeName}
          themeID={themeID}
        />
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
