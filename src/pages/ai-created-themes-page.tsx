import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const AICreatedThemesPage = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const { courseName } = location.state;
  return (
    <>
      <h1>{t("editTheme.titleAI")}</h1>
      <h2>{t("header.course", { courseName })} </h2>
    </>
  );
};
