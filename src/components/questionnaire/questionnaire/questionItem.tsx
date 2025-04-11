import BlockedField from "@commonComponents/blockedField";
import RadioInput from "./radioInput";
import { greenContainerStyles } from "./styles";

type TQuestionItem = {
  question: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
  questionNumber: string;
  index: number;
};

const QuestionItem = ({
  answer_1,
  answer_2,
  answer_3,
  index,
  question,
  questionNumber,
}: TQuestionItem) => {
  return (
    <div key={index} className={greenContainerStyles}>
      <div className="mb-2 p-4 text-lg font-bold text-blue-100">
        {questionNumber} {index + 1}
      </div>
      <div className="mx-auto mb-8 w-[90%]">
        <div className="mb-3">
          <BlockedField styles="" value={question} id="" />
        </div>
        <div className="mb-12 ml-[4%] w-[96%]">
          <RadioInput value={answer_1} name={`radioInputFromSurvey${index}`} />
          <RadioInput value={answer_2} name={`radioInputFromSurvey${index}`} />
          <RadioInput value={answer_3} name={`radioInputFromSurvey${index}`} />
        </div>
      </div>
    </div>
  );
};
export default QuestionItem;
