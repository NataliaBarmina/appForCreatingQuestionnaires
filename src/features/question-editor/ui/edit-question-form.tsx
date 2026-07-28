import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, FieldsError } from "@shared/ui";

import { mainContainerStyles, buttonsContainerStyles, errorsStyles } from "./styles";
import { TEditQuestionForm, TFields } from "../model/types";
import { createSchema } from "../model/validation-schema";

export const EditQuestionForm = ({
  closeDialog,
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
  questionID,
}: TEditQuestionForm) => {
  const { t } = useTranslation();

  const schema = createSchema(t("validation.required"));

  const onSubmit: SubmitHandler<TFields> = (data) => {
    const updatedQuestion = {
      questionForEditing: data.questionForEditing,
      correctAnswer: data.answerForEditing1,
      wrongAnswer1: data.answerForEditing2,
      wrongAnswer2: data.answerForEditing3,
    };
    //todo
    console.log(updatedQuestion, questionID);
    alert(questionID);

    closeDialog();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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

  const { questionForEditing, answerForEditing1, answerForEditing2, answerForEditing3 } = errors;

  const hasError = Object.keys(errors).length > 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={mainContainerStyles}>
      <h1 className="pb-4 pl-10">{t("header.changingQuestion")}</h1>

      <div className="mx-auto w-[90%]">
        <input
          className={!questionForEditing ? "textarea-styles" : errorsStyles}
          {...register("questionForEditing")}
        />

        <div className="s:ml-[2rem] s:w-[93%]">
          <p>{t("formLabel.correctAnswer").toLowerCase()}</p>
          <input
            className={!answerForEditing1 ? "textarea-styles" : errorsStyles}
            {...register("answerForEditing1")}
          />

          <div>{t("formLabel.wrongAnswer").toLowerCase()}</div>
          <input
            className={!answerForEditing2 ? "textarea-styles" : errorsStyles}
            {...register("answerForEditing2")}
          />

          <div>{t("formLabel.wrongAnswer").toLowerCase()}</div>
          <input
            className={!answerForEditing3 ? "textarea-styles" : errorsStyles}
            {...register("answerForEditing3")}
          />
        </div>

        {hasError && <FieldsError message={t("validation.required")} />}
      </div>

      <div className={buttonsContainerStyles}>
        <Button
          buttonLabel={t("buttonLabel.save")}
          size="middle"
          disabled={!isValid}
          type="submit"
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
