import { useTranslation } from "react-i18next";

import { ContentCreationOptions } from "@widgets/content-creation-options";

export const ContentCreationOptionPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("header.creatingQuestionsAndTopics")}</h1>

      <ContentCreationOptions />
    </div>
  );
};
