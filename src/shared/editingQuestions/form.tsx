import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { mainContainerStyles, headerStyles } from "./styles";
import { QuestionForm } from "./questionForm";
import { FormAction } from "./formAction";
import { useDispatch } from "react-redux";
import { editQuestionAsync } from "@store/questions/thunks";
import { TDispatch } from "@store/store";

const createSchema = (requiredMessage: string) =>
  yup.object({
    questionForEditing: yup.string().required(requiredMessage),
    answerForEditing1: yup.string().required(requiredMessage),
    answerForEditing2: yup.string().required(requiredMessage),
    answerForEditing3: yup.string().required(requiredMessage),
  });
// .required(); //без него тип всей схемы потенциально может допускать undefined

export type TFields = yup.InferType<ReturnType<typeof createSchema>>;

export type TFormForEditingQuestions = {
  question: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
  questionID: string;
  closeDialog: () => void;
};

export const EditingForm = ({
  closeDialog,
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
  questionID,
}: TFormForEditingQuestions) => {
  const { t } = useTranslation();

  const dispatch = useDispatch<TDispatch>();

  const schema = createSchema(t("required"));

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
        patch: updatedQuestion,
      })
    );
    closeDialog();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      questionForEditing: question,
      answerForEditing1: correctAnswer,
      answerForEditing2: wrongAnswer1,
      answerForEditing3: wrongAnswer2,
    },
  });

  const hasErrors = Object.keys(errors).length > 0; // проверяем есть ли вообще какие-либо ошибки

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
