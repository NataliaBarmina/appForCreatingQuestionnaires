import { useLocation } from "react-router-dom";
import FormForCreatingQuestionsYourself from "../creating/formForCreatingQuestionsYourself";
import FormForCreatingQuestionsByAI from "../creating/formForCreatingQuestionsByAI";
import QuestionList from "../editing/questionList";
import { TQuizMetadata } from "@/common/dataExample";
import { useTranslation } from "react-i18next";

const FormSelection = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const { buttonLabel, course, questionsList, theme }: TQuizMetadata =
    location.state || {};

  return (
    <div>
      {buttonLabel === t("buttonLabel.yourself") && (
        <FormForCreatingQuestionsYourself course={course} theme={theme} />
      )}
      {buttonLabel === t("buttonLabel.byAI") && (
        <FormForCreatingQuestionsByAI course={course} theme={theme} />
      )}
      {buttonLabel === t("buttonLabel.editing").toLowerCase() && (
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
