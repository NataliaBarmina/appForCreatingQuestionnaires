import { formContainerStyles, headerStyles } from "./styles";
import { TManualCreatingPage } from "./types";
import { useTranslation } from "react-i18next";
import { FormForCreatingQuestionsYourself } from "@features/creating/manual";

export const ManualCreatingPage = ({ courseName, themeName, themeID }: TManualCreatingPage) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={headerStyles}>
        {t("header.createQuestion")} {courseName}
      </div>
      <div className={headerStyles}>
        {t("formLabel.topic")} {themeName}
      </div>

      <div className={formContainerStyles}>
        <FormForCreatingQuestionsYourself
          courseName={courseName}
          themeName={themeName}
          themeID={themeID}
        />
      </div>
    </>
  );
};
