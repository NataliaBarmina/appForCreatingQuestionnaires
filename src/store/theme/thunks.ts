import { TDispatch } from "../store";
import { fsCreateTheme, fsListThemes } from "@store/theme/api";
import { LOAD_THEMES_FROM_FIRESTORE } from "./addThemeReducer";

export const addThemeAsync =
  (payload: { themeName: string; courseName: string }) => async (dispatch: TDispatch) => {
    const theme = await fsCreateTheme(payload);

    dispatch({
      type: "ADD_THEME_FROM_FIRESTORE",
      payload: theme,
    });
  };
export const loadThemesAsync = () => async (dispatch: TDispatch) => {
  const themes = await fsListThemes();
  dispatch({ type: LOAD_THEMES_FROM_FIRESTORE, payload: themes });
};
