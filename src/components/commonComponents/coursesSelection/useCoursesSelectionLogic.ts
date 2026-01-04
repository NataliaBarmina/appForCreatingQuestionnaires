import { useState } from "react";
import { THandleTabChange } from "./types";
import { useSelector } from "react-redux";
import { TRootState } from "@store/store";
import { TCoursesSelection } from "./types";

export const useCoursesSelectionLogic = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange: THandleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const { courses, themes } = useSelector(
    (state: TRootState) => state.addTheme,
  );

  const courseNames = Object.values(courses);
  const selectedCourseName = courseNames[tabValue];

  const selectedTopics = Object.values(themes)
    .filter((item: TCoursesSelection) => item.courseName === selectedCourseName)

  return {
    tabValue,
    handleChange,
    courseNames,
    selectedCourseName,
    selectedTopics,
  };
};
