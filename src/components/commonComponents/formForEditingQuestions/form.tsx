import { SubmitHandler } from "react-hook-form";
import { TFields } from "../createFields";
import { useTranslation } from "react-i18next";
import { mainContainerStyles, headerStyles } from "./styles";
import { UseFormConfig } from "./useFormConfig";
import QuestionForm from "./questionForm";
import FormAction from "./formAction";
import { TFormForEditingQuestions } from "./types";
import { useDispatch } from "react-redux";
import { editQuestion } from "@reducers/actions";

const Form = ({
  closeDialog,
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
  course,
  theme,
  questionIndex,
}: TFormForEditingQuestions) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<TFields> = (data) => {
    const updatedQuestion = {
      question: data.questionForEditing,
      correctAnswer: data.answerForEditing1,
      wrongAnswer1: data.answerForEditing2,
      wrongAnswer2: data.answerForEditing3,
    };

    dispatch(
      editQuestion({
        subject: course,
        topic: theme,
        questionIndex,
        question: updatedQuestion.question,
        answer_1: updatedQuestion.correctAnswer,
        answer_2: updatedQuestion.wrongAnswer1,
        answer_3: updatedQuestion.wrongAnswer2,
      }),
    );
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
