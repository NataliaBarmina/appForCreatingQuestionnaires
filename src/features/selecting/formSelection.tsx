import { useLocation } from "react-router-dom";
import { FormForCreatingQuestionsYourself } from "../creating";
import { QuestionList } from "../editing/questionList";
import { TTopic } from "@shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { CreationModeButton } from "@shared/types/commonTypes";
import { FormForCreatingQuestionsByAI } from "../creating";

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
      {buttonID === CreationModeButton.EDITING && <QuestionList />}
    </div>
  );
};
