import { useLocation } from "react-router-dom";
import FormForCreatingQuestionsYourself from "../creating/formForCreatingQuestionsYourself";
import FormForCreatingQuestionsByAI from "../creating/formForCreatingQuestionsByAI/index";
import QuestionList from "../editing/questionList";
import { TQuizData } from "@/common/dataExample";
import { useTranslation } from "react-i18next";
import { CreationModeButton } from "@common/dataExample";

const FormSelection = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const { buttonID, course, questionsList, theme }: TQuizData =
    location.state || {};

  return (
    <div>
      {buttonID === CreationModeButton.MANUAL && (
        <FormForCreatingQuestionsYourself course={course} theme={theme} />
      )}
      {buttonID === CreationModeButton.AI && (
        <FormForCreatingQuestionsByAI course={course} theme={theme} />
      )}
      {buttonID === CreationModeButton.EDITING && (
        <QuestionList
          course={course}
          theme={theme}
          questionsList={questionsList}
        />
      )}
    </div>
  );
};
export default FormSelection;
