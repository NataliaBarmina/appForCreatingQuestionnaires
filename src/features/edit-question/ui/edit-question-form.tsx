import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Button, FieldsError } from "@shared/ui";
import { buttonsContainerStyles, errorsStyles, pinkContainerStyles, fieldStyles } from "./styles";
import { TEditQuestionForm, TFields, TAnswerField } from "../model/types";
import { createSchema } from "../model/validation-schema";
import { useEditQuestion } from "../api/use-edit-question";

const answerFields: TAnswerField[] = [
  { name: "correctAnswer", label: "formLabel.correctAnswer" },
  { name: "wrongAnswer1", label: "formLabel.wrongAnswer" },
  { name: "wrongAnswer2", label: "formLabel.wrongAnswer" },
];

export const EditQuestionForm = ({ onClose, questionItem }: TEditQuestionForm) => {
  const { t } = useTranslation();

  const schema = createSchema(t("validation.required"));

  const { mutateAsync, isPending } = useEditQuestion();

  const onSubmit: SubmitHandler<TFields> = async (data) => {
    const { id } = questionItem;
    const { question, correctAnswer, wrongAnswer1, wrongAnswer2 } = data;

    const updatedQuestion = {
      question,
      answer_1: correctAnswer,
      answer_2: wrongAnswer1,
      answer_3: wrongAnswer2,
    };

    try {
      await mutateAsync({
        id,
        data: updatedQuestion,
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
  } = useForm<TFields>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      question: questionItem.question,
      correctAnswer: questionItem.answer_1,
      wrongAnswer1: questionItem.answer_2,
      wrongAnswer2: questionItem.answer_3,
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
