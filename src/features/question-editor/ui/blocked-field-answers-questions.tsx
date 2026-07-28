import { useTranslation } from "react-i18next";
import { cn } from "@shared/shadcn";
import { Label } from "@shared/shadcn";

import { TBlockedFieldWithAnswersAndQuestionsProps } from "../model/types";

export const BlockedFieldWithAnswersAndQuestions = ({
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
}: TBlockedFieldWithAnswersAndQuestionsProps) => {
  const { t } = useTranslation();

  const answerFields = [
    {
      id: "correctAnswer",
      value: correctAnswer,
      labelKey: t("formLabel.correctAnswer"),
      styles: "mb-6",
    },
    {
      id: "wrongAnswer1",
      value: wrongAnswer1,
      labelKey: t("formLabel.wrongAnswer"),
      styles: "mb-8",
    },
    {
      id: "wrongAnswer2",
      value: wrongAnswer2,
      labelKey: t("formLabel.wrongAnswer"),
      styles: "mb-5",
    },
  ];

  return (
    <div>
      <p className="textarea-styles mb-6">{question}</p>

      <div className="mx-auto w-[90%]">
        {answerFields.map(({ id, value, labelKey, styles }) => (
          <div key={id}>
            <Label className="text-white" htmlFor={id}>
              {labelKey}
            </Label>

            <p id={id} className={cn("textarea-styles", styles)}>
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
