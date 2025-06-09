import { useLocation } from "react-router-dom";
import FormForCreatingQuestionsYourself from "../creating/formForCreatingQuestionsYourself/formForCreatingQuestionsYourself";
import FormForCreatingQuestionsByAI from "../creating/formForCreatingQuestionsByAI/formForCreatingQuestionsByAI";
import QuestionList from "../editing/questionList";
import { TQuizData } from "@store/commonTypes";
import { useTranslation } from "react-i18next";
import { CreationModeButton } from "@store/commonTypes";

const FormSelection = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const { buttonID, course, theme }: TQuizData = location.state || {};

  return (
    <div>
      {buttonID === CreationModeButton.MANUAL && (
        <FormForCreatingQuestionsYourself course={course} theme={theme} />
      )}
      {buttonID === CreationModeButton.AI && (
        <FormForCreatingQuestionsByAI course={course} theme={theme} />
      )}
      {buttonID === CreationModeButton.EDITING && <QuestionList />}
    </div>
  );
};
export default FormSelection;
