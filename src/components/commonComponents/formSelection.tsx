import { useLocation } from "react-router-dom";
import FormForCreatingQuestionsYourself from "../creating/formForCreatingQuestionsYourself";
import FormForCreatingQuestionsByAI from "../creating/formForCreatingQuestionsByAI/index";
import QuestionList from "../editing/questionList";
import { TQuizData } from "@/common/dataExample";
import { useTranslation } from "react-i18next";

const FormSelection = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const { buttonID, course, questionsList, theme }: TQuizData =
    location.state || {};

  return (
    <div>
      {buttonID === t("buttonLabel.yourself.id") && (
        <FormForCreatingQuestionsYourself course={course} theme={theme} />
      )}
      {buttonID === t("buttonLabel.byAI.id") && (
        <FormForCreatingQuestionsByAI course={course} theme={theme} />
      )}
      {buttonID === t("buttonLabel.editing.id") && (
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
