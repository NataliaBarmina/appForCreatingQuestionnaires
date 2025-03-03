import { useLocation } from "react-router-dom";
import FormForCreatingQuestionsYourself from "../creating/formForCreatingQuestionsYourself";
import FormForCreatingQuestionsByAI from "../creating/formForCreatingQuestionsByAI";
import QuestionList from "../editing/questionList";

const FormSelection = () => {
  const location = useLocation();
  const buttonName = location.state?.buttonName;

  return (
    <div>
      {buttonName === "самостоятельно" && <FormForCreatingQuestionsYourself />}
      {buttonName === "нейросетью" && <FormForCreatingQuestionsByAI />}
      {buttonName === "редактирование" && <QuestionList />}
    </div>
  );
};
export default FormSelection;

// state: { prop1: 'value1', prop2: 'value2' }
// const { prop1, prop2 } = location.state || {};
