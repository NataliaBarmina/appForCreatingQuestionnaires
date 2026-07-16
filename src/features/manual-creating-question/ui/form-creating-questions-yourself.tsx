import { Form } from "@ui/form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { QuestionFormActions } from "./question-form-action";
import { CreateQuestionField } from "./create-question-field";
import { CreateAnswerField } from "./create-answer-field";

import { useAddQuestion } from "../api/use-form-for-creating-questions-yourself";

export type TFormForCreatingQuestionsYourself = {
  themeID: string;
  themeName: string;
  courseName: string;
};

const createRequiredString = (requiredText: string) => yup.string().trim().required(requiredText);

export const createQuestionSchema = (requiredText: string) =>
  yup.object({
    selfWrittenQuestion: createRequiredString(requiredText),
    selfWrittenAnswer1: createRequiredString(requiredText),
    selfWrittenAnswer2: createRequiredString(requiredText),
    selfWrittenAnswer3: createRequiredString(requiredText),
  });

export type TQuestionFields = yup.InferType<ReturnType<typeof createQuestionSchema>>;

export const FormForCreatingQuestionsYourself = ({
  courseName,
  themeName,
  themeID,
}: TFormForCreatingQuestionsYourself) => {
  const { t } = useTranslation();

  const schema = createQuestionSchema(t("required"));

  const form = useForm<TQuestionFields>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting }, // Проверка на валидность формы и Чтобы избежать повторной отправки
  } = form;

  const { mutate: createQuestion } = useAddQuestion();

  const onSubmit = (values: TQuestionFields) => {
    const { selfWrittenQuestion, selfWrittenAnswer1, selfWrittenAnswer2, selfWrittenAnswer3 } =
      values;
    createQuestion(
      {
        courseName,
        themeID,
        themeName,
        question: selfWrittenQuestion,
        answer_1: selfWrittenAnswer1,
        answer_2: selfWrittenAnswer2,
        answer_3: selfWrittenAnswer3,
      },
      {
        onSuccess: () => {
          reset();
        },
        onError: (error) => {
          const message = error instanceof Error ? error.message : t("error.somethingWentWrong");

          toast.error(message);
        },
      }
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CreateQuestionField
          control={form.control}
          disabled={false}
          name="selfWrittenQuestion"
          formLabel={t("placeholder.question")}
          placeholder={t("placeholder.question")}
        />
        <div className="mx-auto w-[85%]">
          <CreateAnswerField
            control={form.control}
            name="selfWrittenAnswer1"
            placeholder={t("placeholder.correctAnswer")}
            formLabel={t("formLabel.answers").toLowerCase()}
          />
          <CreateAnswerField
            control={form.control}
            name="selfWrittenAnswer2"
            placeholder={t("placeholder.wrongAnswer")}
          />
          <CreateAnswerField
            control={form.control}
            name="selfWrittenAnswer3"
            placeholder={t("placeholder.wrongAnswer")}
          />
        </div>

        <QuestionFormActions
          isFormValid={isValid}
          isSubmitting={isSubmitting}
          onFormReset={() => reset()}
          handleCreateManualQuestion={handleSubmit(onSubmit)}
        />
      </form>
    </Form>
  );
};
