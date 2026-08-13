import { Form } from "@shared/ui";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import { QuestionFormActions } from "./question-form-action";
import { CreateQuestionField } from "./create-question-field";
import { CreateAnswerField } from "./create-answer-field";
import { useCreateQuestion } from "../api/use-create-question";
import { createQuestionSchema } from "../model/validation-schema";
import { TQuestionFields } from "../model/types";
import { answerFields } from "../config/answer-fields";

const defaultValues = {
  selfWrittenQuestion: "",
  selfWrittenAnswer1: "",
  selfWrittenAnswer2: "",
  selfWrittenAnswer3: "",
};

export const FormForCreatingQuestionsYourself = ({
  courseName,
  themeName,
  themeId,
}: {
  themeId: string;
  themeName: string;
  courseName: string;
}) => {
  const { t } = useTranslation();

  const schema = createQuestionSchema(
    t("validation.required"),
    t("validation.answersMustBeDifferent")
  );

  const form = useForm<TQuestionFields>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues,
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting }, // Проверка на валидность формы и Чтобы избежать повторной отправки
  } = form;

  const { mutateAsync: createQuestion } = useCreateQuestion();

  const onSubmit: SubmitHandler<TQuestionFields> = async (values) => {
    const questionData = {
      courseName,
      themeId,
      themeName,
      question: values.selfWrittenQuestion,
      answer_1: values.selfWrittenAnswer1,
      answer_2: values.selfWrittenAnswer2,
      answer_3: values.selfWrittenAnswer3,
    };
    try {
      await createQuestion(questionData);

      reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : t("error.somethingWentWrong");
      toast.error(message);
    }
  };

  const submitForm = handleSubmit(onSubmit);

  return (
    <Form {...form}>
      <form onSubmit={submitForm}>
        <CreateQuestionField
          control={control}
          disabled={isSubmitting}
          name="selfWrittenQuestion"
          formLabel={t("placeholder.question")}
          placeholder={t("placeholder.question")}
        />
        <div className="mx-auto w-[85%]">
          {answerFields.map((field) => (
            <CreateAnswerField
              key={field.name}
              control={control}
              name={field.name}
              placeholder={t(field.placeholder)}
              formLabel={t(field.formLabel)}
              disabled={isSubmitting}
            />
          ))}
        </div>

        <QuestionFormActions
          isFormValid={isValid}
          isSubmitting={isSubmitting}
          onFormReset={() => reset()}
          onConfirm={submitForm}
        />
      </form>
    </Form>
  );
};
