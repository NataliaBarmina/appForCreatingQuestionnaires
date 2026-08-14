import { useTranslation } from "react-i18next";
import { EditorContent } from "@widgets/editor-content";

export const EditorPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("header.editingQuestionsAndTopics")}</h1>
      <EditorContent />
    </div>
  );
};
