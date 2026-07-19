import { useState } from "react";
import { useGetThemes } from "./use-course-theme";
import { COURSES } from "./constants";
import { useTranslation } from "react-i18next";
import { CourseThemesContent } from "./course-theme-content";
import { THandleTabChange } from "./course-theme-content";

export const CourseThemesContainer = () => {
  const { t } = useTranslation();

  const [tabValue, setTabValue] = useState(0);

  const selectedCourseName = COURSES[tabValue];

  const handleChange: THandleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };
  const { data: selectedTopics = [], isLoading, isError, error } = useGetThemes(selectedCourseName);

  const errorMessage = error instanceof Error ? error.message : t("error.loadThemesFailed");

  return (
    <div>
      <CourseThemesContent
        tabValue={tabValue}
        selectedCourseName={selectedCourseName}
        selectedTopics={selectedTopics}
        handleChange={handleChange}
        isLoading={isLoading}
        isError={isError}
        errorMessage={errorMessage}
      />
    </div>
  );
};
