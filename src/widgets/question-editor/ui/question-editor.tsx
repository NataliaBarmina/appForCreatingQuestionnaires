import { useTranslation } from "react-i18next";

import { EditQuestionDialog } from "@features/edit-question";
import { DeleteQuestionDialog } from "@features/delete-question";
import { TQuestionList } from "@entities/question";
import { Label } from "@shared/ui";
import { cn } from "@shared/lib";

import { greenContainerStyles } from "./styles";

const getAnswerFields = (question: TQuestionList) => [
  {
    id: "correctAnswer",
    value: question.answer_1,
    labelKey: "formLabel.correctAnswer",
    styles: "mb-6",
  },
  {
    id: "wrongAnswer1",
    value: question.answer_2,
    labelKey: "formLabel.wrongAnswer",
    styles: "mb-8",
  },
  {
    id: "wrongAnswer2",
    value: question.answer_3,
    labelKey: "formLabel.wrongAnswer",
    styles: "mb-5",
  },
];

export const QuestionEditor = ({ data }: { data: TQuestionList[] }) => {
  const { t } = useTranslation();

  return (
    <>
      {data.map((item, index) => {
        const answerFields = getAnswerFields(item);

        return (
          <div key={item.id} className={greenContainerStyles}>
            <h3 className="py-6 text-lg font-bold text-blue-100">
              {`${t("header.questionNumber")} ${index + 1}`}
            </h3>

            <div>
              <p className="textarea-styles mb-6">{item.question}</p>

              <div className="mx-auto w-[90%]">
                {answerFields.map(({ id, value, labelKey, styles }) => (
                  <div key={id}>
                    <Label className="text-white" htmlFor={id}>
                      {t(labelKey)}
                    </Label>

                    <p id={id} className={cn("textarea-styles", styles)}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8 flex w-full justify-evenly py-10">
              <EditQuestionDialog questionItem={item} />

              <DeleteQuestionDialog questionID={item.id} />
            </div>
          </div>
        );
      })}
    </>
  );
};
