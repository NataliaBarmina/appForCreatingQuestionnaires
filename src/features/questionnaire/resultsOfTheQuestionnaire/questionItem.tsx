import { Label } from "@ui/label";
import BlockedField from "../../../shared/createFields/blockedField";
import { greenContainerStyles, questionNumberHeader, centeredContentStyles } from "./styles";

type TQuestionItem = {
  index: number;
  question: string;
  answer_1: string;
  answer_2: string;
  questionNumber: string;
  correctAnswer: string;
  yourAnswer: string;
};

const QuestionItem = ({
  index,
  question,
  answer_1,
  answer_2,
  questionNumber,
  correctAnswer,
  yourAnswer,
}: TQuestionItem) => {
  return (
    <div>
      <div key={index} className={greenContainerStyles}>
        <div className={questionNumberHeader}>
          {questionNumber}
          {index + 1}
        </div>

        <div className={centeredContentStyles}>
          <BlockedField styles="mb-6" value={question} id={""} />

          <div className={centeredContentStyles}>
            <Label className="text-white" htmlFor="correctAnswer">
              {correctAnswer}
            </Label>
            <BlockedField styles="mb-6" value={answer_1} id={"correctAnswer"} />

            <Label className="text-white" htmlFor="yourAnswer">
              {yourAnswer}
            </Label>
            <BlockedField styles="mb-8" value={answer_2} id={"yourAnswer"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionItem;
