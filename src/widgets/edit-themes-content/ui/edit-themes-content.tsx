import { useTranslation } from "react-i18next";

import { EditTheme } from "@features/edit-theme";
import { DeleteTheme } from "@features/delete-theme";
import { useGetThemes } from "@entities/theme";
import { EmptyState, LoadingError, Preloader } from "@shared/ui";

export const EditThemesContent = ({ course }: { course: string }) => {
  const { t } = useTranslation();

  const { data: themes = [], isLoading, isError, error } = useGetThemes(course);

  const isThemes = themes.length > 0;

  if (isLoading) {
    return <Preloader />;
  }
  if (isError) {
    return <LoadingError message={error.message} />;
  }
  if (!isThemes) {
    return <EmptyState message={t("emptyState.noThemes")} />;
  }
  return (
    <div className="mx-auto mt-8 w-[90%] rounded-xl bg-green-800 px-12 pt-10">
      {themes.map((theme) => (
        <div key={theme.themeId} className="textarea-styles mb-4 rounded-lg font-medium">
          <div className="flex flex-row items-center justify-between pr-6">
            <p>{theme.themeName}</p>
            <div className="flex items-center gap-3">
              <EditTheme themeId={theme.themeId} />
              <DeleteTheme themeId={theme.themeId} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
