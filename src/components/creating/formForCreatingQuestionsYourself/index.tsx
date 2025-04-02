import { Form } from "@ui/form";
import { TQuizMetadata } from "@/common/dataExample";
import { useTranslation } from "react-i18next";
import { formContainerClasses } from "./styles";
import useQuestionForm from "./useQuestionForm";
import FormAction from "../formForCreatingQuestionsByAI/formAction";
import CustomTextAreaField from "./customTextareaField";
import AnswersField from "./answersGroup";

const FormForCreatingQuestionsYourself = ({ course, theme }: TQuizMetadata) => {
  const { t } = useTranslation();

  const form = useQuestionForm(theme, t("required"));

  function onSubmit(values: any) {
    console.log("Сохраненные данные:", values); //todo- удалить или что-то сделать
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
                placeholder={t("placeholder.wrongAnswer")}
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
            />
          </form>
        </Form>
      </div>
    </div>
  );
};
export default FormForCreatingQuestionsYourself;
