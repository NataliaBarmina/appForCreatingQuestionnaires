import { Textarea } from "@shared/createFields";
import { errorsStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { TForm } from "./types";

export const QuestionForm = ({ errors, register }: TForm) => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto w-[95%]">
      <div className="mb-3">
        <Textarea
          register={register}
          fieldName="questionForEditing"
          styles={errors.questionForEditing ? errorsStyles : ""}
        />
      </div>
      <div className="s:ml-[2rem] s:w-[93%]">
        <div>{t("formLabel.correctAnswer").toLowerCase()}</div>
        <Textarea
          register={register}
          fieldName="answerForEditing1"
          styles={errors.answerForEditing1 ? errorsStyles : ""}
        />
        <div>{t("formLabel.wrongAnswer").toLowerCase()}</div>
        <Textarea
          register={register}
          fieldName="answerForEditing2"
          styles={errors.answerForEditing2 ? errorsStyles : ""}
        />
        <div>{t("formLabel.wrongAnswer").toLowerCase()}</div>
        <Textarea
          register={register}
          fieldName="answerForEditing3"
          styles={errors.answerForEditing3 ? errorsStyles : ""}
        />
      </div>
    </div>
  );
};
