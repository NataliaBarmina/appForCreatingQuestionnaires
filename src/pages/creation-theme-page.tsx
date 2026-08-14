import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { CreateThemeManually } from "@features/create-theme-manually";
import { AIThemesCreation } from "@features/generate-theme-with-ai";
import { ThemeCreationMode } from "@entities/theme";

export const CreationThemePage = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const { course, buttonID } = location.state;
  console.log(buttonID, course);

  return (
    <>
      <h1>{t("createTheme.title")}</h1>

      <h2>{t("createTheme.forCourse", { course })}</h2>

      {buttonID === ThemeCreationMode.MANUAL && (
        <div className="mx-auto mt-10 w-[85%] rounded-lg bg-green-800 px-4 pb-10 pt-14">
          <CreateThemeManually courseName={course} />{" "}
        </div>
      )}

      {buttonID === ThemeCreationMode.AI && <AIThemesCreation courseName={course} />}
    </>
  );
};
