import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { EditQuestionContent } from "@widgets/edit-question-content";

export const QuestionsCreatedByAI = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const { themeID } = location.state || {};
  return (
    <div>
      <h1>{t("header.questionsGeneratedByAI")}</h1>
      <h2>{t("header.course")}</h2>
      <h2>{t("header.theme")}</h2>
      <EditQuestionContent themeID={themeID} />
    </div>
  );
};
