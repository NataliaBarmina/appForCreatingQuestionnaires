import { BlockedField } from "@shared/createFields";
import { RadioInput } from "./radio-input";
import { useFormContext } from "react-hook-form";
import { shuffleArray } from "@shared/utils/shuffleArray";
import { useMemo } from "react";
import { cn } from "@lib/utils";

type TQuestionItem = {
  question: string;
  correctAnswer: string;
  wrongAnswer_1: string;
  wrongAnswer_2: string;
  headerQuestionNumber: string;
  index: number;
  errorMessage: any;
};

export const greenContainerStyles = cn(
  "mx-auto mb-8 w-[100vw] bg-green-800",
  "border-2 border-solid border-gray-600",
  "s:w-[95vw] s:rounded-2xl",
  "md:w-[65vw]",
  "lg:w-[55vw]",
  "xl:w-[50vw]",
  "2xl:w-[45vw]"
);

export const QuestionItem = ({
  correctAnswer,
  wrongAnswer_1,
  wrongAnswer_2,
  index,
  question,
  headerQuestionNumber,
  errorMessage,
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

        {errorMessage && (
          <span className="rounded-sm bg-red-50 px-2 text-lg font-bold text-pink-900">
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
};
