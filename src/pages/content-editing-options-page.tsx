import { useTranslation } from "react-i18next";
import { ContentEditingOptions } from "@widgets/content-editing-options";

export const ContentEditingOptionsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-1 flex-col [container-type:inline-size]">
      <h1 className="h-[12cqh] text-[1.3rem] lg:h-[15cqh]">
        {t("header.editingQuestionsAndTopics")}
      </h1>
      <div className="h-[67cqh] md:h-[63cqh] lg:h-[70cqh]">
        <ContentEditingOptions />
      </div>
    </div>
  );
};
