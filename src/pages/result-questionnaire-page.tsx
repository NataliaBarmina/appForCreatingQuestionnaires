import { useTranslation } from "react-i18next";
import { ResultQuestionnaireContent } from "@widgets/result-questionnaire";

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
