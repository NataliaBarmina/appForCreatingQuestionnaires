import { Creating } from "@features/creating";
import { CoursesSelection } from "@features/selecting";
import { TRootState } from "@store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TDispatch } from "@store/store";
import { useEffect } from "react";
import { loadThemesAsync } from "@store/theme/thunks";

export const Editing = () => {
  const dispatch = useDispatch<TDispatch>(); //!todo - разобраться надо ли

  useEffect(() => {
    dispatch(loadThemesAsync()); //!todo - разобраться надо ли
  }, [dispatch]);

  const themes = useSelector((state: TRootState) => state.addTheme.themes);
  const isThemes = Object.values(themes).length;
  return <>{!isThemes ? <Creating /> : <CoursesSelection />}</>;
};
