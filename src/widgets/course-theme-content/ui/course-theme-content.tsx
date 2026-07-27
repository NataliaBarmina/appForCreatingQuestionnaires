import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Preloader, LoadingError, EmptyState } from "@shared/ui";

import { CourseSelection, THandleTabChange } from "@features/coursesSelection";
import { ThemesSelection } from "@features/theme-selection";
import { useGetThemes } from "../api/use-course-theme";

export const COURSES = ["JavaScript", "CSS", "TypeScript", "HTML", "Cmd", "Git", "React", "Прочее"];

export const CourseThemesContent = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const buttonID = location.state?.buttonID;

  const [tabValue, setTabValue] = useState(0);

  const selectedCourseName = COURSES[tabValue];

  const handleChange: THandleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };
  const { data: selectedTopics = [], isLoading, isError, error } = useGetThemes(selectedCourseName);

  const errorMessage = error instanceof Error ? error.message : t("error.loadThemesFailed");

  const hasThemes = selectedTopics.length > 0 && !isError && !isLoading;

  return (
    <div className="w-full pb-11">
      <CourseSelection tabValue={tabValue} courses={COURSES} handleChange={handleChange} />

      {isLoading && <Preloader />}
      {isError && <LoadingError message={errorMessage} />}

      <h1 className="pb-10 pt-12 text-xl font-bold">
        {t("header.themeSelection")} {selectedCourseName}
      </h1>

      {hasThemes ? (
        <ThemesSelection
          courseName={selectedCourseName}
          selectedTopics={selectedTopics}
          buttonID={buttonID}
        />
      ) : (
        <EmptyState message={t("emptyState.noThemes")} />
      )}
    </div>
  );
};
