import { useTranslation } from "react-i18next";
import { QuestionnaireResult } from "@widgets/questionnaire-result";

export const QuestionnaireResultPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>
        {t("survey.congratulation")} <br /> {t("survey.completedSurvey")}
      </h1>
      <QuestionnaireResult />
    </div>
  );
};
