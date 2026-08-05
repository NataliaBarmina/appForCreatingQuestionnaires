import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { CreateThemeManually } from "@features/create-theme-manually";
import { AIThemesCreation } from "@features/generate-theme-with-ai";
import { ThemeCreationMode } from "@entities/theme";

export const CreateThemePage = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const { course, buttonID } = location.state;
  console.log(buttonID, course);

  return (
    <>
      <h1>{t("header.createTheme")}</h1>

      <h2>
        {t("header.byCourse")} {course}
      </h2>

      {buttonID === ThemeCreationMode.MANUAL && <CreateThemeManually courseName={course} />}

      {buttonID === ThemeCreationMode.AI && <AIThemesCreation courseName={course} />}
    </>
  );
};
