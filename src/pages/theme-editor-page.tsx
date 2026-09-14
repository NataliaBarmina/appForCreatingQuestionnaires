import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ThemeEditor } from "@widgets/theme-editor";
import { useGetThemes } from "@entities/theme";
import { EmptyState, LoadingError, Preloader } from "@shared/ui";

export const ThemeEditorPage = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const { course } = location.state;

  const { data: themes, isLoading, isFetching, isError, error } = useGetThemes(course);

  if (isLoading || isFetching || themes === undefined) {
    return <Preloader />;
  }
  if (isError) {
    return <LoadingError message={error.message} />;
  }
  if (themes.length === 0) {
    return <EmptyState message={t("emptyState.noThemes")} />;
  }

  return (
    <div>
      <h1>{t("editTheme.title", { course })}</h1>
      <ThemeEditor themes={themes} />
    </div>
  );
};
