import { useTranslation } from "react-i18next";

import { CreationOptions } from "@features/creation-options";

export const CreationOptionsPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="pt-16 text-center text-2xl font-bold text-slate-900">
        {t("header.creatingQuestionsAndTopics")}
      </h1>

      <CreationOptions />
    </div>
  );
};
