import { useState } from "react";
import { THandleTabChange } from "./types";
import { useSelector } from "react-redux";
import { TRootState } from "@store/store";
import { TCoursesSelection } from "./types";

export const useCoursesSelectionLogic = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange: THandleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const { courses, themes } = useSelector(
    (state: TRootState) => state.addTheme,
  );

  const courseNames = Object.values(courses);
  const selectedCourseName = courseNames[tabValue];

  const selectedTopicName = Object.values(themes)
    .filter((item: TCoursesSelection) => item.courseName === selectedCourseName)
    .map((item: TCoursesSelection) => item.themeName);

  return {
    tabValue,
    courseNames,
    handleChange,
    selectedCourseName,
    selectedTopicName,
  };
};
