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
      <h1 className="px-4 py-5 text-[1.5rem] font-semibold">
        {t("editQuestions.changingQuestion")}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto px-2 xl:px-6">
          <textarea
            className={!errors.question ? fieldStyles : errorsStyles}
            {...register("question")}
          />

          <div>
            {answerFields.map(({ name, label }) => (
              <div key={name}>
                <p className="text-center text-[0.9rem] text-black">{t(label).toLowerCase()}</p>

                <textarea
                  className={errors[name] ? errorsStyles : fieldStyles}
                  {...register(name)}
                />
              </div>
            ))}
          </div>
          {hasError && <FieldsError message={t("validation.required")} />}
        </div>

        <div className={buttonsContainerStyles}>
          <Button
            buttonLabel={t("buttonLabel.save")}
            disabled={!isValid || isPending}
            type="submit"
          />

          <Button buttonLabel={t("buttonLabel.closeForm")} onClick={onClose} type="button" />
        </div>
      </form>
    </div>
  );
};
