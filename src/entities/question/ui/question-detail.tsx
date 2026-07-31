import { useTranslation } from "react-i18next";
import { cn } from "@shared/lib";
import { Label } from "@shared/ui";

import { TQuestionDetail } from "../model/types";
import { getAnswerFields } from "./get-answers-field";

export const QuestionDetail = ({ questionItem }: { questionItem: TQuestionDetail }) => {
  const { t } = useTranslation();

  const answerFields = getAnswerFields(
    questionItem.answer_1,
    questionItem.answer_2,
    questionItem.answer_3
  );

  return (
    <div>
      <p className="textarea-styles mb-6">{questionItem.question}</p>

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
  );
};
