import { useTranslation } from "react-i18next";
import { QuestionnaireForm } from "@features/take-questionnaire";

export const QuestionnairePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="pb-6">{t("survey.title")}</h1>
      <QuestionnaireForm />
    </>
  );
};
