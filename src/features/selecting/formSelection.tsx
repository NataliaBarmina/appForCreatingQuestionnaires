import { useLocation } from "react-router-dom";
import { FormForCreatingQuestionsYourself } from "../creating";
import { QuestionList } from "../editing/questionList";
import { TQuizData } from "@shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { CreationModeButton } from "@shared/types/commonTypes";
import { FormForCreatingQuestionsByAI } from "../creating";

export const FormSelection = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const { buttonID, course, theme, themeID }: TQuizData = location.state || {};

  return (
    <div>
      {buttonID === CreationModeButton.MANUAL && (
        <FormForCreatingQuestionsYourself course={course} theme={theme} themeID={themeID} />
      )}
      {buttonID === CreationModeButton.AI && (
        <FormForCreatingQuestionsByAI course={course} theme={theme} themeID={themeID} />
      )}
      {buttonID === CreationModeButton.EDITING && <QuestionList />}
    </div>
  );
};
