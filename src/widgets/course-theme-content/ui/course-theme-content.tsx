import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { CourseSelection, THandleTabChange } from "@features/select-course";
import { ThemesSelection } from "@features/select-theme";
import { useGetThemes } from "@entities/theme";
import { COURSES } from "@entities/course";
import { Preloader, LoadingError, EmptyState } from "@shared/ui";

export const CourseThemesContent = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const buttonID = location.state?.buttonID;

  const [tabValue, setTabValue] = useState(0);

  const selectedCourseName = COURSES[tabValue];

  const handleChange: THandleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };
  const { data: themes = [], isLoading, isError, error } = useGetThemes(selectedCourseName);

  const errorMessage = error instanceof Error ? error.message : t("error.loadThemesFailed");

  const hasThemes = themes.length > 0;

  return (
    <div className="w-full pb-11">
      <CourseSelection tabValue={tabValue} courses={COURSES} handleChange={handleChange} />

      {isLoading && <Preloader />}
      {isError && <LoadingError message={errorMessage} />}

      <h2 className="pt-10">{t("courseThemeSelection.themeSelection", { selectedCourseName })}</h2>

      {!isLoading && !isError && !hasThemes && <EmptyState message={t("emptyState.noThemes")} />}

      {!isLoading && !isError && hasThemes && (
        <ThemesSelection
          courseName={selectedCourseName}
          selectedTopics={themes}
          buttonID={buttonID}
        />
      )}
    </div>
  );
};
