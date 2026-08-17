import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { GenerateThemesForm } from "@features/generate-themes-with-ai";

export const AIThemesGenerationPage = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const { course, buttonID } = location.state;

  return (
    <>
      <h1>{t("createTheme.title")}</h1>

      <h2>{t("createTheme.forCourse", { course })}</h2>

      <GenerateThemesForm courseName={course} buttonID={buttonID} />
    </>
  );
};
