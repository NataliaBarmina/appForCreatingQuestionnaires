import { useTranslation } from "react-i18next";
import { QuestionnaireForm } from "@features/form-questionnaire";

export const Questionnaire = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="px-4 py-7 text-[150%] font-bold">{t("header.answerToQuestion")}</div>
      <QuestionnaireForm />
    </>
  );
};
