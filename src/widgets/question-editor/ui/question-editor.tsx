import { useTranslation } from "react-i18next";

import { EditQuestionDialog } from "@features/edit-question-manually";
import { DeleteQuestionDialog } from "@features/delete-question-manually";
import { TQuestionList } from "@entities/question";
import { Label } from "@shared/ui";
import { cn } from "@shared/lib";

import { greenContainerStyles } from "./styles";
import { answerFields } from "../config/get-answer-fields";

export const QuestionEditor = ({ data }: { data: TQuestionList[] }) => {
  const { t } = useTranslation();

  return (
    <>
      {data.map((item, index) => {
        const { id, question } = item;

        return (
          <div key={id} className={greenContainerStyles}>
            <h3 className="py-6 text-lg font-bold text-blue-100">
              {`${t("header.questionNumber")} ${index + 1}`}
            </h3>

            <div>
              <p className="textarea-styles mb-6">{question}</p>

              <div className="mx-auto w-[90%]">
                {answerFields.map(({ id, value, labelKey, styles }) => (
                  <div key={id}>
                    <Label className="text-white" htmlFor={id}>
                      {t(labelKey)}
                    </Label>

                    <p id={id} className={cn("textarea-styles", styles)}>
                      {item[value]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8 flex w-full justify-evenly py-10">
              <EditQuestionDialog questionItem={item} />

              <DeleteQuestionDialog questionID={id} />
            </div>
          </div>
        );
      })}
    </>
  );
};
