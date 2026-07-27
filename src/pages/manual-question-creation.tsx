import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@shared/chadcn";
import { FormForCreatingQuestionsYourself } from "@features/manual-creating-question";

export const formContainerStyles = cn(
  "mx-auto mb-5 w-[100vw] bg-green-800 px-6",
  "border-2 border-solid border-gray-600",
  "s:w-[90vw] s:rounded-2xl",
  "md:w-[65vw]",
  "lg:w-[55vw]",
  "xl:w-[50vw]",
  "2xl:w-[45vw]"
);

export const ManualQuestionCreation = () => {
  const { t } = useTranslation();

  const location = useLocation();

  const {
    courseName,
    themeName,
    themeID,
  }: { courseName: string; themeName: string; themeID: string } = location.state || {};

  return (
    <>
      <h1>
        {t("header.createQuestion")} {courseName}
      </h1>
      <h2>
        {t("formLabel.topic")} {themeName}
      </h2>

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
