import { useState } from "react";
import { THandleTabChange } from "./types";
import { useSelector } from "react-redux";
import { TRootState } from "@store/store";
import { TCoursesSelection } from "./types";
import { TDispatch } from "@store/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadThemesAsync } from "@store/theme/thunks";

export const useCoursesSelectionLogic = () => {
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
    (item: TCoursesSelection) => item.courseName === selectedCourseName
  );

  return {
    tabValue,
    handleChange,
    courses,
    selectedCourseName,
    selectedTopics,
  };
};
