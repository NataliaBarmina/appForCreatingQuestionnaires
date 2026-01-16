import { Form } from "@ui/form";
import { TQuizData } from "@shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { formContainerClasses } from "./styles";
import { useQuestionForm } from "./useQuestionForm";
import { FormAction } from "./formAction";
import { CustomTextAreaField } from "./customTextareaField";
import { AnswersField } from "./answersField";
import { TFields } from "@/shared/createFields/textarea";
import { addQuestions } from "@store/newReducer";

export const FormForCreatingQuestionsYourself = ({ course, theme, themeID }: TQuizData) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const form = useQuestionForm(theme, t("required"));

  function onSubmit(values: TFields) {
    dispatch(
      addQuestions({
        courseName: course,
        themeID: themeID,
        question: values.selfWrittenQuestion,
        answer_1: values.selfWrittenAnswer1,
        answer_2: values.selfWrittenAnswer2,
        answer_3: values.selfWrittenAnswer3,
      })
    );
  }

  const isFormValid = form.formState.isValid; // Проверка на валидность формы
  const isSubmitting = form.formState.isSubmitting; // Чтобы избежать повторной отправки

  const onFormReset = () => {
    form.reset({
      selfWrittenQuestion: "",
      selfWrittenAnswer1: "",
      selfWrittenAnswer2: "",
      selfWrittenAnswer3: "",
    });
  };

  const handleCreateManualQuestion = form.handleSubmit((values) => {
    onSubmit(values);
    onFormReset();
  });

  return (
    <div>
      <div className="p-8 text-[150%] font-bold">
        {t("header.createQuestion")} {course}
      </div>
      <div className="p-8 text-[150%] font-bold">
        {t("formLabel.topic")} {theme}
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
            <div className="mx-auto w-[85%]">
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
              isFormValid={isFormValid}
              isSubmitting={isSubmitting}
              onFormReset={onFormReset}
              onCreateManualQuestion={handleCreateManualQuestion}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};
