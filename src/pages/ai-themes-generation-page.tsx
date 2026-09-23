import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { GenerateThemesForm } from "@features/generate-themes-with-ai";

// todo - поискать где передается buttonID и убрать ее

export const AIThemesGenerationPage = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const { course: courseName } = location.state;

  return (
    <>
      <h1 className="px-2 pb-6 pt-10 text-[1.2rem]">{t("generateTheme.title", { courseName })}</h1>

      <GenerateThemesForm courseName={courseName} />
    </>
  );
};
