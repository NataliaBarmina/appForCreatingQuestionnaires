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

const defaultValues = {
  selfWrittenQuestion: "",
  selfWrittenAnswer1: "",
  selfWrittenAnswer2: "",
  selfWrittenAnswer3: "",
};

export const FormForCreatingQuestionsYourself = ({
  courseName,
  themeName,
  themeID,
}: {
  themeID: string;
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
      themeID,
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
          disabled={false}
          name="selfWrittenQuestion"
          formLabel={t("placeholder.question")}
          placeholder={t("placeholder.question")}
        />
        <div className="mx-auto w-[85%]">
          <CreateAnswerField
            control={control}
            name="selfWrittenAnswer1"
            placeholder={t("placeholder.correctAnswer")}
            formLabel={t("formLabel.answers").toLowerCase()}
            disabled={isSubmitting}
          />
          <CreateAnswerField
            control={control}
            name="selfWrittenAnswer2"
            placeholder={t("placeholder.wrongAnswer")}
            formLabel=""
            disabled={isSubmitting}
          />
          <CreateAnswerField
            control={control}
            name="selfWrittenAnswer3"
            placeholder={t("placeholder.wrongAnswer")}
            formLabel=""
            disabled={isSubmitting}
          />
        </div>

        <QuestionFormActions
          isFormValid={isValid}
          isSubmitting={isSubmitting}
          onFormReset={() => reset}
          handleCreateManualQuestion={submitForm}
        />
      </form>
    </Form>
  );
};
