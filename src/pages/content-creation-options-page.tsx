import { useTranslation } from "react-i18next";

import { ContentCreationOptions } from "@widgets/content-creation-options";

export const ContentCreationOptionPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-1 flex-col items-center">
      <h1 className="max-w-full px-4 pb-[clamp(1rem,5svh,3rem)] pt-[clamp(1rem,4svh,2.5rem)] text-center leading-tight">
        {t("header.creatingQuestionsAndTopics")}
      </h1>

      <ContentCreationOptions />
    </div>
  );
};
