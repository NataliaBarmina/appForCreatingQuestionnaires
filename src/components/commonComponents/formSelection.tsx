import { useLocation } from "react-router-dom";
import FormForCreatingQuestionsYourself from "../creating/formForCreatingQuestionsYourself";
import FormForCreatingQuestionsByAI from "../creating/formForCreatingQuestionsByAI";
import QuestionList from "../editing/questionList";

type Theme = {
  вопрос: string;
  ответ_1: string;
  ответ_2: string;
  ответ_3: string;
};

type LocationState = {
  buttonName?: string;
  course?: string;
  questionsList?: Theme[];
  theme?: string;
};

const FormSelection = () => {
  const location = useLocation();

  const { buttonName, course, questionsList, theme }: LocationState =
    location.state || {};

  return (
    <div>
      {buttonName === "самостоятельно" && (
        <FormForCreatingQuestionsYourself course={course} theme={theme} />
      )}
      {buttonName === "нейросетью" && (
        <FormForCreatingQuestionsByAI course={course} theme={theme} />
      )}
      {buttonName === "редактирование" && (
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
