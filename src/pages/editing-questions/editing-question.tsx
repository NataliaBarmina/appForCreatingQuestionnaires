import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { HeadersBlock, LoadingError, Preloader, EmptyState } from "@shared/ui";
import { QuestionsList } from "@features/questions-list/questions-list";
import { useGetQuestionsByTheme } from "./use-editing-questions";

export const EditingQuestions = () => {
  const { t } = useTranslation();

  const location = useLocation();

  const {
    courseName,
    themeName,
    themeID,
  }: { courseName: string; themeName: string; themeID: string } = location.state || {};

  const { data = [], isLoading, isError, error } = useGetQuestionsByTheme(themeID);

  const hasQuestions = data.length > 0;

  return (
    <div>
      <div className="pb-1">
        <HeadersBlock
          questionsGeneratedByAIHeader={t("header.editQuestion")}
          courseHeader={t("header.course")}
          themeHeader={t("header.theme")}
          courseName={courseName}
          themeName={themeName}
        />
        {isLoading && <Preloader />}

        {isError && <LoadingError message={error.message} />}

        {!isError && !isLoading && !hasQuestions ? (
          <EmptyState message={t("emptyState.noQuestions")} />
        ) : (
          <QuestionsList data={data} />
        )}
      </div>
    </div>
  );
};
