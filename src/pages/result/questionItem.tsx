import { Label } from "@chadcnUi/label";
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

export const QuestionItem = ({
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
      <div className={greenContainerStyles}>
        <p className={questionNumberHeader}>
          {questionNumber}
          {index + 1}
        </p>

        <div className={centeredContentStyles}>
          <p className="textarea-styles mb-6">{question}</p>

          <div className={centeredContentStyles}>
            <Label className="text-white" htmlFor="correctAnswer">
              {correctAnswer}
            </Label>
            <p id={"correctAnswer"} className="textarea-styles mb-6">
              {answer_1}
            </p>

            <Label className="text-white" htmlFor="yourAnswer">
              {yourAnswer}
            </Label>
            <p id={"yourAnswer"} className="textarea-styles mb-6">
              {answer_2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
