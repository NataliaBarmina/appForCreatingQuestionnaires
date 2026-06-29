import { useLocation } from "react-router-dom";
import { ThemesSelection } from "@widgets/selecting/themeSelection";
import { CourseSelection } from "@widgets/selecting/coursesSelection/courseSelection";
import { TDispatch } from "@store/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadThemesAsync } from "@store/theme/thunks";
import { useState } from "react";
import { useSelector } from "react-redux";
import { TRootState } from "@store/store";

export type THandleTabChange = (event: React.SyntheticEvent, newValue: number) => void;

export type TSelectedTopics = {
  courseName: string;
  themeName: string;
};

export const CourseThemeSelection = () => {
  const location = useLocation();
  const buttonID = location.state?.buttonID;

  const [tabValue, setTabValue] = useState(0);

  const handleChange: THandleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const dispatch = useDispatch<TDispatch>();

  useEffect(() => {
    dispatch(loadThemesAsync());
  }, [dispatch]);

  const { courses, themes } = useSelector((state: TRootState) => state.addTheme);

  const selectedCourseName = courses[tabValue];

  const selectedTopics = Object.values(themes).filter(
    (item: TSelectedTopics) => item.courseName === selectedCourseName
  );

  return (
    <div className="w-full pb-11">
      <CourseSelection tabValue={tabValue} courses={courses} handleChange={handleChange} />

      <ThemesSelection
        courseName={selectedCourseName}
        selectedTopics={selectedTopics}
        buttonID={buttonID}
      />
    </div>
  );
};
