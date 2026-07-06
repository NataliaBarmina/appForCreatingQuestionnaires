import { useLocation } from "react-router-dom";
import { ThemesSelection } from "@widgets/selecting/themeSelection";
import { CourseSelection } from "@widgets/selecting/coursesSelection/courseSelection";
import { useState, type SyntheticEvent } from "react";
import { Preloader } from "@shared/ui";
import { useGetThemes } from "./use-course-theme";
import { COURSES } from "./constants";
import { LoadingError } from "@shared/ui/loading-error";
import { useTranslation } from "react-i18next";

export type THandleTabChange = (event: SyntheticEvent, newValue: number) => void;

export const CourseThemeSelection = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const buttonID = location.state?.buttonID;

  const [tabValue, setTabValue] = useState(0);

  const selectedCourseName = COURSES[tabValue];

  const handleChange: THandleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };
  const { data: selectedTopics = [], isLoading, isError, error } = useGetThemes(selectedCourseName);

  return (
    <div className="w-full pb-11">
      <CourseSelection tabValue={tabValue} courses={COURSES} handleChange={handleChange} />

      {isLoading && <Preloader />}

      {!isLoading && !isError && (
        <ThemesSelection
          courseName={selectedCourseName}
          selectedTopics={selectedTopics}
          buttonID={buttonID}
        />
      )}

      {isError && !isLoading && (
        <LoadingError message={error?.message || t("error.loadThemesFailed")} />
      )}
    </div>
  );
};
