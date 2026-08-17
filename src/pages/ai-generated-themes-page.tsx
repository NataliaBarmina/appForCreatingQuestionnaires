import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeEditor } from "@widgets/theme-editor";

const themes = [
  { themeId: "JKLKL", courseName: "", themeName: "jfd" },
  { themeId: "JKLKLffff", courseName: "", themeName: "gkdfkl" },
];

export const AIGeneratedThemesPage = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const { courseName, buttonID } = location.state;

  return (
    <>
      <h1>{t("editTheme.titleAI")}</h1>
      <h2>{t("header.course", { courseName })} </h2>
      <ThemeEditor themes={themes} buttonID={buttonID} />
    </>
  );
};
