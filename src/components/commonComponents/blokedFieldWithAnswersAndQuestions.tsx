import StaticFieldForQuestionsAndAnswers from "./staticFieldForQuestionsAndAnswers";
import { Label } from "../../chadcnComponents/ui/label";

type MyProps = {
  question: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
};

const BlokedFieldWithAnswersAndQuestions = ({
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
}: MyProps) => {
  return (
    <div>
      <StaticFieldForQuestionsAndAnswers id="" value={question} styles="mb-6" />
      <div className="mx-auto w-[90%]">
        <Label className="text-white" htmlFor="correctAnswer">
          ПРАВИЛЬНЫЙ ОТВЕТ
        </Label>
        <StaticFieldForQuestionsAndAnswers
          styles="mb-6"
          value={correctAnswer}
          id={"correctAnswer"}
        />
        <Label className="text-white" htmlFor="wrongAnswer1">
          НЕПРАВИЛЬНЫЙ ОТВЕТ
        </Label>
        <StaticFieldForQuestionsAndAnswers
          styles="mb-8"
          value={wrongAnswer1}
          id={"wrongAnswer1"}
        />
        <Label className="text-white" htmlFor="wrongAnswer2">
          НЕПРАВИЛЬНЫЙ ОТВЕТ
        </Label>
        <StaticFieldForQuestionsAndAnswers
          styles="mb-5"
          value={wrongAnswer2}
          id={"wrongAnswer2"}
        />
      </div>
    </div>
  );
};
export default BlokedFieldWithAnswersAndQuestions;
