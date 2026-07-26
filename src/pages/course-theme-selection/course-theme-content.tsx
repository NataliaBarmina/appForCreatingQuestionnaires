import { useLocation } from "react-router-dom";
import { type SyntheticEvent } from "react";
import { ThemesSelection } from "@features/theme-selection";
import { CourseSelection } from "@features/coursesSelection/courseSelection";
import { Preloader } from "@shared/ui";
import { COURSES } from "./constants";
import { LoadingError } from "@shared/ui/loading-error";
import { useTranslation } from "react-i18next";
import { EmptyState } from "@shared/ui/emptyState";

export type THandleTabChange = (event: SyntheticEvent, newValue: number) => void;

export type TSelectedTopic = {
  id: string;
  courseName: string;
  themeName: string;
};

export type TCourseThemesContent = {
  tabValue: number;
  selectedCourseName: string;
  selectedTopics: TSelectedTopic[];
  handleChange: THandleTabChange;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

export const CourseThemesContent = ({
  tabValue,
  selectedCourseName,
  selectedTopics,
  handleChange,
  isLoading,
  isError,
  errorMessage,
}: TCourseThemesContent) => {
  const { t } = useTranslation();

  const location = useLocation();
  const buttonID = location.state?.buttonID;

  const hasThemes = selectedTopics.length > 0;

  return (
    <div className="w-full pb-11">
      <CourseSelection tabValue={tabValue} courses={COURSES} handleChange={handleChange} />

      {isLoading && <Preloader />}

      {isError && <LoadingError message={errorMessage} />}

      {!isLoading &&
        !isError &&
        (hasThemes ? (
          <ThemesSelection
            courseName={selectedCourseName}
            selectedTopics={selectedTopics}
            buttonID={buttonID}
          />
        ) : (
          <EmptyState message={t("emptyState.noThemes")} />
        ))}
    </div>
  );
};
