import { Creating } from "@features/creating";
import { CoursesSelection } from "@features/selecting";
import { TRootState } from "@store/store";
import { useSelector } from "react-redux";

export const Editing = () => {
  const themes = useSelector((state: TRootState) => state.addTheme.themes);
  const isThemes = Object.values(themes).length;
  return <>{!isThemes ? <Creating /> : <CoursesSelection />}</>;
};
