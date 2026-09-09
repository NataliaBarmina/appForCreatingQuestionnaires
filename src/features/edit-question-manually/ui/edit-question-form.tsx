import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Button, FieldsError } from "@shared/ui";
import { buttonsContainerStyles, errorsStyles, pinkContainerStyles, fieldStyles } from "./styles";
import { TEditQuestionForm, TQuestionItem } from "../model/types";
import { createSchema } from "../model/validation-schema";
import { useEditQuestion } from "../api/use-edit-question";
import { answerFields } from "../config/answers-field";

export const EditQuestionForm = ({ onClose, questionItem }: TEditQuestionForm) => {
  const { t } = useTranslation();

  const { id, question, answer_1, answer_2, answer_3 } = questionItem;

  const schema = createSchema(t("validation.required"));

  const { mutateAsync, isPending } = useEditQuestion();

  const onSubmit: SubmitHandler<TQuestionItem> = async (data) => {
    const { question, answer_1, answer_2, answer_3 } = data;

    try {
      await mutateAsync({
        id,
        data: {
          question,
          answer_1,
          answer_2,
          answer_3,
        },
      });

      onClose?.();
    } catch (error) {
      const message = error instanceof Error ? error.message : t("error.somethingWentWrong");
      toast.error(message);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      question,
      answer_1,
      answer_2,
      answer_3,
    },
  });

  const hasError = Object.keys(errors).length > 0;

  return (
    <div className={pinkContainerStyles}>
      <h1 className="pb-6 pl-10 text-3xl font-semibold">{t("editQuestions.changingQuestion")}</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto w-[90%] font-medium">
          <input
            className={!errors.question ? fieldStyles : errorsStyles}
            {...register("question")}
          />

          <div className="s:ml-[2rem] s:w-[93%]">
            {answerFields.map(({ name, label }) => (
              <div key={name}>
                <p className="text-black">{t(label).toLowerCase()}</p>

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
            disabled={!isValid || isPending}
            type="submit"
          />

          <Button
            buttonLabel={t("buttonLabel.closeForm")}
            size="middle"
            onClick={onClose}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};
