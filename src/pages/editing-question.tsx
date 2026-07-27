import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { EditQuestionContent } from "@features/editing-questions-content";

export const EditingQuestions = () => {
  const { t } = useTranslation();

  const location = useLocation();

  const {
    courseName,
    themeName,
    themeID,
  }: { courseName: string; themeName: string; themeID: string } = location.state || {};

  return (
    <div>
      <div>
        <h1>{t("header.editQuestion")}</h1>

        <h2>
          {t("header.course")} {courseName}
        </h2>

        <h2>
          {t("header.theme")} {themeName}
        </h2>

        <EditQuestionContent themeID={themeID} />
      </div>
    </div>
  );
};
