import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { CreateThemeManually } from "@features/create-theme-manually";
import { AIThemeCreation } from "@features/generate-theme-with-ai";
import { CreationMode } from "@entities/theme";

export const CreateThemePage = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const { course, buttonID } = location.state;

  return (
    <>
      <h1>{t("header.createTheme")}</h1>

      <h2>
        {t("header.byCourse")} {course}
      </h2>

      {buttonID === CreationMode.MANUAL_THEMES && (
        <div className="mx-auto mt-10 w-[85%] rounded-lg bg-green-800 px-4 pb-10 pt-14">
          <CreateThemeManually courseName={course} />
        </div>
      )}

      {buttonID === CreationMode.AI_THEMES && <AIThemeCreation />}
    </>
  );
};
