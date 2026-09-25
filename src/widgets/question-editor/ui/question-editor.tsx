import { useTranslation } from "react-i18next";

import { EditQuestionDialog } from "@features/edit-question-manually";
import { DeleteQuestionDialog } from "@features/delete-question-manually";
import { TQuestionList } from "@entities/question";
import { Label } from "@shared/ui";

import { greenContainerStyles, fieldStyles } from "./styles";
import { answerFields } from "../config/get-answer-fields";

export const QuestionEditor = ({ data }: { data: TQuestionList[] }) => {
  const { t } = useTranslation();

  return (
    <>
      {data.map((item, index) => {
        const { id, question } = item;

        return (
          <div key={id} className={greenContainerStyles}>
            <h3 className="py-4 text-lg font-bold text-blue-100">
              {`${t("header.questionNumber")} ${index + 1}`}
            </h3>

            <div>
              <p className={fieldStyles}>{question}</p>

              <div className="mx-auto w-[95%]">
                {answerFields.map(({ id, value, labelKey }) => (
                  <div key={id}>
                    <Label className="text-white" htmlFor={id}>
                      {t(labelKey)}
                    </Label>

                    <p id={id} className={fieldStyles}>
                      {item[value]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4 flex w-full justify-evenly pb-4">
              <EditQuestionDialog questionItem={item} />

              <DeleteQuestionDialog questionID={id} />
            </div>
          </div>
        );
      })}
    </>
  );
};
