import { BlockedField } from "@shared/createFields";
import { RadioInput } from "./radioInput";
import { greenContainerStyles } from "./styles";
import { useFormContext } from "react-hook-form";
import { shuffleArray } from "@shared/utils/shuffleArray";
import { useMemo } from "react";

type TQuestionItem = {
  question: string;
  correctAnswer: string;
  wrongAnswer_1: string;
  wrongAnswer_2: string;
  headerQuestionNumber: string;
  index: number;
};

export const QuestionItem = ({
  correctAnswer,
  wrongAnswer_1,
  wrongAnswer_2,
  index,
  question,
  headerQuestionNumber,
}: TQuestionItem) => {
  const { register } = useFormContext();

  const shuffledAnswers = useMemo(
    () => shuffleArray([correctAnswer, wrongAnswer_1, wrongAnswer_2]),
    []
  );

  return (
    <div key={index} className={greenContainerStyles}>
      <div className="mb-2 p-4 text-lg font-bold text-blue-100">
        {headerQuestionNumber} {index + 1}
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
