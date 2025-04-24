import { SubmitHandler } from "react-hook-form";
import { TFields } from "../createFields";
import { useTranslation } from "react-i18next";
import { mainContainerStyles, headerStyles } from "./styles";
import { UseFormConfig } from "./useFormConfig";
import QuestionForm from "./questionForm";
import FormAction from "./formAction";
import { TFormForEditingQuestions } from "./types";

const Form = ({
  closeDialog,
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
}: TFormForEditingQuestions) => {
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<TFields> = (data, errors) => {
    // console.log(data);
    alert("сохраняем вопрос"); //todo: need to remove
    closeDialog();
  };

  const handleDelete = () => {
    closeDialog();
  };

  const { register, errors, handleSubmit, hasErrors } = UseFormConfig({
    defaultValues: {
      questionForEditing: question,
      answerForEditing1: correctAnswer,
      answerForEditing2: wrongAnswer1,
      answerForEditing3: wrongAnswer2,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={mainContainerStyles}>
        <div className={headerStyles}>{t("header.changingQuestion")}</div>
        <QuestionForm errors={errors} register={register} />
        <FormAction
          hasErrors={hasErrors}
          onSubmit={handleSubmit(onSubmit)}
          onDelete={handleDelete}
        />
      </div>
    </form>
  );
};

export default Form;
