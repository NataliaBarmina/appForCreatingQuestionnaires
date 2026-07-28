import { useTranslation } from "react-i18next";

import { CreationOptions } from "@widgets/creation-options";

export const CreationOptionsPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("header.creatingQuestionsAndTopics")}</h1>

      <CreationOptions />
    </div>
  );
};
