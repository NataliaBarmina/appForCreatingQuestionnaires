import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@shared/lib";
import { CreateQuestionForm } from "@features/create-question-manually";

export const ManualQuestionCreationPage = () => {
  const { t } = useTranslation();

  const location = useLocation();

  const {
    courseName,
    themeName,
    themeId,
  }: { courseName: string; themeName: string; themeId: string } = location.state || {};

  return (
    <div className="flex flex-1 flex-col [container-type:inline-size]">
      <h1 className="text-[1.2rem] leading-none">{t("createQuestion.title", { courseName })}</h1>
      <h2 className="py-4 text-[1.1rem] leading-none lg:py-8">
        {t("header.theme", { themeName })}
      </h2>

      <div
        className={cn(
          "mx-auto w-full bg-green-800 px-2 s:bg-green-800 sm:px-6",
          "s:border-2 s:border-solid s:border-gray-500",
          "s:w-[90cqw] s:rounded-2xl",
          "md:w-[80cqw]",
          "lg:w-[90cqw]",
          "xl:w-[80cqw]"
        )}
      >
        <CreateQuestionForm themeId={themeId} />
      </div>
    </div>
  );
};
