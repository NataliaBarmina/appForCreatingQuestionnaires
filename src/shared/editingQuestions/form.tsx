import { SubmitHandler } from "react-hook-form";
import { TFields } from "../createFields/textarea";
import { useTranslation } from "react-i18next";
import { mainContainerStyles, headerStyles } from "./styles";
import { UseFormConfig } from "./useFormConfig";
import { QuestionForm } from "./questionForm";
import { FormAction } from "./formAction";
import { TFormForEditingQuestions } from "./types";
import { useDispatch } from "react-redux";
import { editQuestionAsync } from "@store/questions/thunks";
import { TDispatch } from "@store/store";

export const Form = ({
  closeDialog,
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
  questionID,
}: TFormForEditingQuestions) => {
  const { t } = useTranslation();

  const dispatch = useDispatch<TDispatch>();

  const onSubmit: SubmitHandler<TFields> = (data) => {
    const updatedQuestion = {
      question: data.questionForEditing,
      correctAnswer: data.answerForEditing1,
      wrongAnswer1: data.answerForEditing2,
      wrongAnswer2: data.answerForEditing3,
    };

    dispatch(
      editQuestionAsync({
        questionID,
        patch: {
          question: data.questionForEditing,
          answer_1: data.answerForEditing1,
          answer_2: data.answerForEditing2,
          answer_3: data.answerForEditing3,
        },
      })
    );
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
          onDelete={() => closeDialog()}
        />
      </div>
    </form>
  );
};
