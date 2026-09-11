import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { QuestionEditor } from "@widgets/question-editor";
import { useGetQuestionsByTheme } from "@entities/question";
import { LoadingError, Preloader, EmptyState } from "@shared/ui";

export const QuestionEditorPage = () => {
  const { t } = useTranslation();

  const location = useLocation();

  const {
    courseName,
    themeName,
    themeId,
  }: { courseName: string; themeName: string; themeId: string } = location.state || {};

  const { data = [], isLoading, isError, error } = useGetQuestionsByTheme(themeId);

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
          <QuestionEditor data={data} />
        )}
      </div>
    </div>
  );
};
