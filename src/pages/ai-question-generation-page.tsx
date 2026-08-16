import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { GenerateQuestionsForm } from "@features/generate-questions-with-ai";

export const AIQuestionsGenerationPage = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const { courseName, themeName, themeId } = location.state || {};

  return (
    <>
      <h1>{t("generateQuestions.title", { courseName })}</h1>

      <h2>{t("header.theme", { themeName })}</h2>

      <GenerateQuestionsForm themeId={themeId} courseName={courseName} themeName={themeName} />
    </>
  );
};
