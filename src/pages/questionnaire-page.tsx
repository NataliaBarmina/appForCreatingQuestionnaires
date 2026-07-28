import { useTranslation } from "react-i18next";
import { QuestionnaireForm } from "@features/form-questionnaire";

export const Questionnaire = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="pb-6">{t("header.answerToQuestion")}</h1>
      <QuestionnaireForm />
    </>
  );
};
