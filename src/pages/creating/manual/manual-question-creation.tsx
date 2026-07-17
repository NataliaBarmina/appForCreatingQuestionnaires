import { useLocation } from "react-router-dom";
import { formContainerStyles, headerStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { FormForCreatingQuestionsYourself } from "@features/manual-creating-question";

export const ManualQuestionCreation = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const { courseName, themeName, themeID }: any = location.state || {};

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
