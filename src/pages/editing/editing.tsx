import { Creating } from "../creating";
import { CourseThemeSelection } from "../selecting/course-theme-selection";
import { TRootState } from "@store/store";
import { useSelector } from "react-redux";

export const Editing = () => {
  const themes = useSelector((state: TRootState) => state.addTheme);
  const hasThemes = Object.values(themes).length > 0;
  return <>{!hasThemes ? <Creating /> : <CourseThemeSelection />}</>;
};
