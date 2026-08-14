import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { EditQuestionContent } from "@widgets/edit-question-content";
import { useGetQuestionsByTheme } from "@entities/question";
import { LoadingError, Preloader, EmptyState } from "@shared/ui";

export const EditingQuestions = () => {
  const { t } = useTranslation();

  const location = useLocation();

  const { courseName, themeName }: { courseName: string; themeName: string } = location.state || {};

  const { data = [], isLoading, isError, error } = useGetQuestionsByTheme(themeName);

  if (isLoading) return <Preloader />;
  if (isError) return <LoadingError message={error.message} />;

  return (
    <div>
      <div>
        <h1>{t("editQuestions.title", { courseName })}</h1>

        <h2>{t("header.theme", { themeName })}</h2>

        {data.length === 0 ? (
          <EmptyState message={t("emptyState.noQuestions")} />
        ) : (
          <EditQuestionContent data={data} />
        )}
      </div>
    </div>
  );
};
