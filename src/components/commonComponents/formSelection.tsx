import { useLocation } from "react-router-dom";
import FormForCreatingQuestionsYourself from "../creating/formForCreatingQuestionsYourself";
import FormForCreatingQuestionsByAI from "../creating/formForCreatingQuestionsByAI";
import QuestionList from "../editing/questionList";
import { TQuizMetadata } from "@/common/dataExample";

const FormSelection = () => {
  const location = useLocation();

  const { buttonLabel, course, questionsList, theme }: TQuizMetadata =
    location.state || {};

  return (
    <div>
      {buttonLabel === "самостоятельно" && (
        <FormForCreatingQuestionsYourself course={course} theme={theme} />
      )}
      {buttonLabel === "нейросетью" && (
        <FormForCreatingQuestionsByAI course={course} theme={theme} />
      )}
      {buttonLabel === "редактирование" && (
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
