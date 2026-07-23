import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@shared/ui";
import {
  mainContainerStyles,
  headerStyles,
  buttonsContainerStyles,
  textareaStyles,
} from "./styles";
import { TEditQuestionForm } from "../model/types";

import { useDispatch } from "react-redux";
import { editQuestionAsync } from "@store/questions/thunks";
import { TDispatch } from "@store/store";

//todo - обработка ошибок, если поле пустое, то добавлять красную обводку

const createSchema = (requiredMessage: string) =>
  yup.object({
    questionForEditing: yup.string().required(requiredMessage),
    answerForEditing1: yup.string().required(requiredMessage),
    answerForEditing2: yup.string().required(requiredMessage),
    answerForEditing3: yup.string().required(requiredMessage),
  });

export type TFields = yup.InferType<ReturnType<typeof createSchema>>;

export const EditQuestionForm = ({
  closeDialog,
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
  questionID,
}: TEditQuestionForm) => {
  const { t } = useTranslation();

  const dispatch = useDispatch<TDispatch>();

  const schema = createSchema(t("validation.required"));

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
    <form onSubmit={handleSubmit(onSubmit)} className={mainContainerStyles}>
      <div className={headerStyles}>{t("header.changingQuestion")}</div>

      <div className="mx-auto w-[90%]">
        <input className={textareaStyles} {...register("questionForEditing")} />

        <div className="s:ml-[2rem] s:w-[93%]">
          <p>{t("formLabel.correctAnswer").toLowerCase()}</p>
          <input className={textareaStyles} {...register("answerForEditing1")} />

          <div>{t("formLabel.wrongAnswer").toLowerCase()}</div>
          <input className={textareaStyles} {...register("answerForEditing2")} />

          <div>{t("formLabel.wrongAnswer").toLowerCase()}</div>
          <input className={textareaStyles} {...register("answerForEditing3")} />
        </div>
      </div>

      <div className={buttonsContainerStyles}>
        <Button
          buttonLabel={t("buttonLabel.save")}
          size="middle"
          disabled={hasErrors}
          type="button"
          onClick={handleSubmit(onSubmit)}
        />
        <Button
          buttonLabel={t("buttonLabel.closeForm")}
          size="middle"
          onClick={() => closeDialog()}
          type="button"
        />
      </div>
    </form>
  );
};
