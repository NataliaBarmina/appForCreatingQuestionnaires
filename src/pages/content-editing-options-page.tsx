import { useTranslation } from "react-i18next";
import { ContentEditingOptions } from "@widgets/content-editing-options";

export const ContentEditingOptionsPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("header.editingQuestionsAndTopics")}</h1>
      <ContentEditingOptions />
    </div>
  );
};
