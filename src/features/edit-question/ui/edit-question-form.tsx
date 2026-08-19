import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";

import { cn } from "@shared/lib";
import { Button, FieldsError } from "@shared/ui";
import {
  buttonsContainerStyles,
  errorsStyles,
  pinkContainerStyles,
  greenContainerStyles,
} from "./styles";
import { TEditQuestionForm, TFields, TAnswerField } from "../model/types";
import { createSchema } from "../model/validation-schema";

const answerFields: TAnswerField[] = [
  { name: "correctAnswer", label: "formLabel.correctAnswer" },
  { name: "wrongAnswer1", label: "formLabel.wrongAnswer" },
  { name: "wrongAnswer2", label: "formLabel.wrongAnswer" },
];

export const EditQuestionForm = ({ onClose, onDelete, questionItem, mode }: TEditQuestionForm) => {
  const { t } = useTranslation();
  const { question, answer_1, answer_2, answer_3, id } = questionItem;

  const schema = createSchema(t("validation.required"));

  const onSubmit: SubmitHandler<TFields> = (data) => {
    const updatedQuestion = {
      question: data.question,
      correctAnswer: data.correctAnswer,
      wrongAnswer1: data.wrongAnswer1,
      wrongAnswer2: data.wrongAnswer2,
    };
    //todo
    alert(id);
    onClose?.();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TFields>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      question,
      correctAnswer: answer_1,
      wrongAnswer1: answer_2,
      wrongAnswer2: answer_3,
    },
  });

  const hasError = Object.keys(errors).length > 0;

  const isDefaultMode = mode === "default";

  const fieldStyles = isDefaultMode ? cn("textarea-styles", "border-[#ff806d]") : "textarea-styles";

  const containerStyles = isDefaultMode ? pinkContainerStyles : greenContainerStyles;

  const labelStyles = isDefaultMode ? "text-black" : "text-white";

  return (
    <div className={containerStyles}>
      {isDefaultMode && (
        <h1 className="pb-6 pl-10 text-3xl font-semibold">{t("editQuestions.changingQuestion")}</h1>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto w-[90%] font-medium">
          <input
            className={!errors.question ? fieldStyles : errorsStyles}
            {...register("question")}
          />

          <div className="s:ml-[2rem] s:w-[93%]">
            {answerFields.map(({ name, label }) => (
              <div key={name}>
                <p className={labelStyles}>{t(label).toLowerCase()}</p>

                <input className={errors[name] ? errorsStyles : fieldStyles} {...register(name)} />
              </div>
            ))}
          </div>
          {hasError && <FieldsError message={t("validation.required")} />}
        </div>

        <div className={buttonsContainerStyles}>
          <Button
            buttonLabel={t("buttonLabel.save")}
            size="middle"
            disabled={!isValid}
            type="submit"
          />

          <Button
            buttonLabel={t(isDefaultMode ? "buttonLabel.closeForm" : "buttonLabel.delete")}
            size="middle"
            onClick={isDefaultMode ? onClose : onDelete}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};
