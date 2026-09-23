import { useState } from "react";
import { useFormContext } from "react-hook-form";
import shuffle from "lodash-es/shuffle";
import { useTranslation } from "react-i18next";

import { FieldsError } from "@shared/ui";
import { TQuestionItem } from "../model/types";
import { greenContainerStyles, radioInputStyles } from "./styles";

export const QuestionItem = ({ index, questionItem, errorMessage }: TQuestionItem) => {
  const { t } = useTranslation();
  const { register } = useFormContext();

  const { answer_1, answer_2, answer_3, question } = questionItem;

  const [shuffledAnswers] = useState(() => shuffle([answer_1, answer_2, answer_3]));

  return (
    <div className={greenContainerStyles}>
      <div className="mb-2 p-4 text-lg font-bold text-blue-100">
        {t("header.questionNumber")}
        {index + 1}
      </div>

      <div className="mx-auto mb-8 w-[90%]">
        <p lang="ru" className="textarea-styles mb-4 hyphens-auto rounded-md text-[0.9rem]">
          {question}
        </p>

        <div className="mb-12 ml-[4%] w-[96%]">
          {shuffledAnswers.map((answer, answerIndex) => (
            <div key={answer + answerIndex}>
              <label className="mb-4 flex">
                <input
                  lang="ru"
                  className="mt-2 h-8 w-8"
                  type="radio"
                  value={answer}
                  {...register(`radioInputFromSurvey.${index}`)}
                />

                <span className={radioInputStyles}>{answer}</span>
              </label>
            </div>
          ))}
        </div>

        {errorMessage && <FieldsError message={errorMessage} styles="bg-red-50 " />}
      </div>
    </div>
  );
};
