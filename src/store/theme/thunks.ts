import { TDispatch } from "../store";
import { createTheme, listThemes } from "@store/theme/api";
import { LOAD_THEMES } from "./addThemeReducer";

export const addThemeAsync =
  (payload: { themeName: string; courseName: string }) => async (dispatch: TDispatch) => {
    const theme = await createTheme(payload);

    dispatch({
      type: "ADD_THEME_FROM_FIRESTORE",
      payload: theme,
    });
  };
export const loadThemesAsync = () => async (dispatch: TDispatch) => {
  const themes = await listThemes();
  dispatch({ type: LOAD_THEMES, payload: themes });
};
