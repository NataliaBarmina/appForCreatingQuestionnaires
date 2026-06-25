import { Form } from "@ui/form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Resolver } from "react-hook-form";

import { FormAction } from "@features/creating/manual/formAction";
import { CustomTextAreaField } from "@features/creating/manual/customTextareaField";
import { AnswersField } from "@features/creating/manual/answersField";
import { addQuestionAsync } from "@store/questions/thunks";

import { createQuestionSchema } from "./create-question-schema";
import { formContainerClasses, headerStyles, answersFieldContainerStyles } from "./styles";
import type { TFormForCreatingQuestionsYourself } from "./types";
import type { TQuestionFields } from "@features/creating/manual/types";
import type { TDispatch } from "@store/store";

const questionFormDefaultValues: TQuestionFields = {
  selfWrittenQuestion: "",
  selfWrittenAnswer1: "",
  selfWrittenAnswer2: "",
  selfWrittenAnswer3: "",
};

export const FormForCreatingQuestionsYourself = ({
  courseName,
  themeName,
  themeID,
}: TFormForCreatingQuestionsYourself) => {
  const { t } = useTranslation();

  const dispatch = useDispatch<TDispatch>();

  const schema = createQuestionSchema(t("required"));

  const form = useForm<TQuestionFields>({
    resolver: yupResolver(schema) as unknown as Resolver<TQuestionFields>,
    mode: "onChange",
    defaultValues: questionFormDefaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting }, // Проверка на валидность формы и Чтобы избежать повторной отправки
  } = form;

  const onFormReset = () => {
    reset(questionFormDefaultValues);
  };

  const onSubmit = (values: TQuestionFields) => {
    dispatch(
      addQuestionAsync({
        courseName,
        themeID,
        themeName,
        question: values.selfWrittenQuestion,
        answer_1: values.selfWrittenAnswer1,
        answer_2: values.selfWrittenAnswer2,
        answer_3: values.selfWrittenAnswer3,
      })
    );

    onFormReset();
  };
  const handleCreateManualQuestion = handleSubmit(onSubmit);

  return (
    <div>
      <div className={headerStyles}>
        {t("header.createQuestion")} {courseName}
      </div>
      <div className={headerStyles}>
        {t("formLabel.topic")} {themeName}
      </div>

      <div className={formContainerClasses}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CustomTextAreaField
              control={form.control}
              disabled={false}
              name="selfWrittenQuestion"
              formLabel={t("placeholder.question")}
              placeholder={t("placeholder.question")}
            />
            <div className={answersFieldContainerStyles}>
              <AnswersField
                control={form.control}
                name="selfWrittenAnswer1"
                placeholder={t("placeholder.correctAnswer")}
                formLabel={t("formLabel.answers").toLowerCase()}
              />
              <AnswersField
                control={form.control}
                name="selfWrittenAnswer2"
                placeholder={t("placeholder.wrongAnswer")}
              />
              <AnswersField
                control={form.control}
                name="selfWrittenAnswer3"
                placeholder={t("placeholder.wrongAnswer")}
              />
            </div>

            <FormAction
              isFormValid={isValid}
              isSubmitting={isSubmitting}
              onFormReset={onFormReset}
              handleCreateManualQuestion={handleCreateManualQuestion}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};
