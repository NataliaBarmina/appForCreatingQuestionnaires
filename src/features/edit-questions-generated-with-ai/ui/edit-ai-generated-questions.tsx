import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { useCreateQuestion } from "@entities/question";
import { Button, FieldsError } from "@shared/ui";
import { greenContainerStyles, buttonsContainerStyles, errorsStyles } from "./styles";
import { createSchema } from "../model/validation-schema";
import { TFields, TEditAIGeneratedQuestions } from "../model/types";
import { answerFieldsConfig } from "../config/answers-fields-config";

export const EditAIGeneratedQuestions = ({
  questionItem,
  themeId,
  deleteQuestion,
}: TEditAIGeneratedQuestions) => {
  const { t } = useTranslation();

  const { question, answer_1, answer_2, answer_3 } = questionItem;

  const schema = createSchema(t("validation.required"));

  const { mutateAsync, isPending } = useCreateQuestion();

  const onSubmit: SubmitHandler<TFields> = async (values) => {
    const questionData = {
      themeId,
      question: values.question,
      answer_1: values.answer_1,
      answer_2: values.answer_2,
      answer_3: values.answer_3,
    };

    try {
      await mutateAsync(questionData);
      deleteQuestion(question);
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
      question,
      answer_1,
      answer_2,
      answer_3,
    },
  });

  const hasError = Object.keys(errors).length > 0;

  return (
    <div className={greenContainerStyles}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto w-[90%] font-medium">
          <textarea
            className={!errors.question ? "textarea-styles" : errorsStyles}
            {...register("question")}
          />

          <div className="s:ml-[2rem] s:w-[93%]">
            {answerFieldsConfig.map(({ name, label }) => (
              <div key={name}>
                <p className="text-white">{t(label).toLowerCase()}</p>

                <textarea
                  className={errors[name] ? errorsStyles : "textarea-styles"}
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
            size="middle"
            disabled={!isValid || isPending}
            type="submit"
          />

          <Button
            buttonLabel={t("buttonLabel.delete")}
            size="middle"
            onClick={() => deleteQuestion(question)}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};
