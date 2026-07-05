import { useLocation } from "react-router-dom";
import { ThemesSelection } from "@widgets/selecting/themeSelection";
import { CourseSelection } from "@widgets/selecting/coursesSelection/courseSelection";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getThemesByCourse } from "./use-course-theme";
import { Preloader } from "@shared/ui";

export type THandleTabChange = (event: React.SyntheticEvent, newValue: number) => void;

export type TSelectedTopics = {
  courseName: string;
  themeName: string;
};

const courses = ["JavaScript", "CSS", "TypeScript", "HTML", "Cmd", "Git", "React", "Прочее"];

export const CourseThemeSelection = () => {
  const location = useLocation();
  const buttonID = location.state?.buttonID;

  const [tabValue, setTabValue] = useState(0);

  const selectedCourseName = courses[tabValue];

  const handleChange: THandleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };
  const {
    data: selectedTopics = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["themes", selectedCourseName],
    queryFn: () => getThemesByCourse(selectedCourseName),
    enabled: Boolean(selectedCourseName),
  });

  if (isError) {
    return <div>Ошибка: {error.message}</div>;
  }
  return (
    <div className="w-full pb-11">
      {isLoading && <Preloader />}

      <CourseSelection tabValue={tabValue} courses={courses} handleChange={handleChange} />

      <ThemesSelection
        courseName={selectedCourseName}
        selectedTopics={selectedTopics}
        buttonID={buttonID}
      />
    </div>
  );
};
