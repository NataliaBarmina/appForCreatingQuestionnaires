import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { GenerateQuestionsForm } from "@features/generate-questions-with-ai";

export const AIQuestionsGenerationPage = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const { courseName, themeName, themeId } = location.state || {};

  return (
    <>
      <h1 className="px-2 text-[1.2rem]">{t("generateQuestions.title", { courseName })}</h1>

      <h2 className="px-2 text-[1.1rem]">
        {t("header.theme", { themeName: themeName?.toLowerCase() })}
      </h2>

      <GenerateQuestionsForm courseName={courseName} themeName={themeName} themeId={themeId} />
    </>
  );
};
