import BlockedField from "@commonComponents/blockedField";
import RadioInput from "./radioInput";
import { greenContainerStyles } from "./styles";
import { useFormContext } from "react-hook-form";
import { shuffleArray } from "@utils/shuffleArray";
import { useMemo } from "react";

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
  const { register } = useFormContext();

  const shuffledAnswers = useMemo(
    () => shuffleArray([answer_1, answer_2, answer_3]),
    [], // пустой массив — рендер производится один раз
  );

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
          <RadioInput
            value={shuffledAnswers[0]}
            register={register}
            name={`radioInputFromSurvey.${index}`}
          />
          <RadioInput
            value={shuffledAnswers[1]}
            register={register}
            name={`radioInputFromSurvey.${index}`}
          />
          <RadioInput
            value={shuffledAnswers[2]}
            register={register}
            name={`radioInputFromSurvey.${index}`}
          />
        </div>
      </div>
    </div>
  );
};
export default QuestionItem;
