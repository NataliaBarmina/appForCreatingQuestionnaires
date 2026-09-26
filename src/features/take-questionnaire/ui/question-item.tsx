import { useState } from "react";
import { useFormContext } from "react-hook-form";
import shuffle from "lodash-es/shuffle";
import { useTranslation } from "react-i18next";

import { FieldsError } from "@shared/ui";
import { TQuestionItem } from "../model/types";
import { cn } from "@shared/lib";

export const greenContainerStyles = cn(
  "mx-auto mb-4 pb-4 w-full bg-green-800",
  "md:border-2 md:border-solid md:border-gray-600",
  "md:w-[90%] md:rounded-2xl"
);
export const fieldStyles = "textarea-styles py-[2px] mb-0";

export const QuestionItem = ({ index, questionItem, errorMessage }: TQuestionItem) => {
  const { t } = useTranslation();
  const { register } = useFormContext();

  const { answer_1, answer_2, answer_3, question } = questionItem;

  const [shuffledAnswers] = useState(() => shuffle([answer_1, answer_2, answer_3]));

  return (
    <div className={greenContainerStyles}>
      <div className="p-2 text-lg font-bold text-blue-100">
        {t("header.questionNumber")}
        {index + 1}
      </div>

      <div className="mx-auto w-[95%] sm:w-[90%]">
        <p className={cn(fieldStyles, "mb-4")}>{question}</p>

        <div>
          {shuffledAnswers.map((answer, answerIndex) => (
            <div key={answer + answerIndex}>
              <label className="mb-4 flex items-center justify-center gap-2">
                <input
                  className="h-7 w-7"
                  type="radio"
                  value={answer}
                  {...register(`radioInputFromSurvey.${index}`)}
                />

                <p className={fieldStyles}>{answer}</p>
              </label>
            </div>
          ))}
        </div>

        {errorMessage && <FieldsError message={errorMessage} styles="bg-red-50 " />}
      </div>
    </div>
  );
};
