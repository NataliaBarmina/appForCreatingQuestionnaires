import { SubmitHandler } from "react-hook-form";
import { TFields } from "@commonComponents/createFields";
import { useNavigate } from "react-router-dom";
import Button from "@commonComponents/buttons";
import { TQuizData } from "@store/commonTypes";
import { useTranslation } from "react-i18next";
import { formContainerClasses, headerClasses } from "./styles";
import TextAreaBlock from "./textAreaBlock";
import useQuestionForm from "./useQuestionForm";

const FormForCreatingQuestionsByAI = ({ course, theme }: TQuizData) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useQuestionForm({ topicName: theme }, t("required"));

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TFields> = (data) => {
    // console.log(data);
    navigate("/formForCreatingQuestionsYourself", { state: { course, theme } });
  };
  // /questionsCreatedByAI // todo - потом переделать, надо вводить какую-то общую компоненту
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-4">
        <TextAreaBlock
          placeholder={t("placeholder.topic")}
          register={register}
          fieldName="topicName"
          styles=""
          error={errors.topicName}
          disabled={!!theme}
        />
      </div>
      <div>
        <Button buttonLabel={t("buttonLabel.send")} size="middle" />
      </div>
    </form>
  );
};
export default FormForCreatingQuestionsByAI;
