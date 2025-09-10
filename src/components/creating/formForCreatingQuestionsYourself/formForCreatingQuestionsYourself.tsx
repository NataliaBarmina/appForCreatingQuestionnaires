import { Form } from "@ui/form";
import { TQuizData } from "@store/commonTypes";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { formContainerClasses } from "./styles";
import useQuestionForm from "./useQuestionForm";
import FormAction from "../formForCreatingQuestionsByAI/formAction";
import CustomTextAreaField from "./customTextareaField";
import AnswersField from "./answersGroup";
import { TFields } from "@commonComponents/createFields";
import type { Dispatch } from "redux";
import { addTheme, TAddThemeAction } from "@reducers/createByYourSelfReducer";

const FormForCreatingQuestionsYourself = ({ course, theme }: TQuizData) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<Dispatch<TAddThemeAction>>();

  const form = useQuestionForm(theme, t("required"));

  function onSubmit(values: TFields) {
    const selectedTopic = theme || values.selfWrittenTopicName;

    dispatch(
      addTheme({
        subject: course ?? "",
        topic: selectedTopic,
        question: values.selfWrittenQuestion,
        answer_1: values.selfWrittenAnswer1,
        answer_2: values.selfWrittenAnswer2,
        answer_3: values.selfWrittenAnswer3,
      }),
    );
  }

  const isFormValid = form.formState.isValid; // Проверка на валидность формы
  const isSubmitting = form.formState.isSubmitting; // Чтобы избежать повторной отправки

  const onFormReset = () => {
    form.reset({
      selfWrittenTopicName: theme,
      selfWrittenQuestion: "",
      selfWrittenAnswer1: "",
      selfWrittenAnswer2: "",
      selfWrittenAnswer3: "",
    });
  };

  return (
    <div>
      <div className="p-8 text-[150%] font-bold">
        {t("header.createQuestion")} {course}
      </div>

      <div className={formContainerClasses}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CustomTextAreaField
              control={form.control}
              disabled={!!theme}
              name="selfWrittenTopicName"
              formLabel={t("formLabel.topic")}
              placeholder={t("placeholder.topic")}
            />

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
              onSubmit={() => form.handleSubmit(onSubmit)}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};
export default FormForCreatingQuestionsYourself;
