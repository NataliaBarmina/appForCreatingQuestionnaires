import { useTranslation } from "react-i18next";
import { ResultQuestionnaireContent } from "@features/result-questionnaire-content";

export const ResultsOfTheQuestionnaire = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>
        {t("header.congratulation")} <br /> {t("header.completedSurvey")}
      </h1>
      <ResultQuestionnaireContent />
    </div>
  );
};
