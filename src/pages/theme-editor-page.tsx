import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ThemeEditor } from "@widgets/theme-editor";
import { useGetThemes } from "@entities/theme";
import { EmptyState, LoadingError, Preloader } from "@shared/ui";

export const ThemeEditorPage = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const course = location.state?.course;

  const { data: themes, isLoading, isError, error } = useGetThemes(course);

  if (isLoading) {
    return <Preloader />;
  }
  if (isError) {
    return <LoadingError message={error.message} />;
  }
  if (!themes?.length) {
    return <EmptyState message={t("emptyState.noThemes")} />;
  }

  return (
    <div>
      <h1>{t("editTheme.title", { course })}</h1>
      <ThemeEditor themes={themes} />
    </div>
  );
};
