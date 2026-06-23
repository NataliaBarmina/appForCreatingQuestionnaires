import type { TTopic } from "@shared/types/commonTypes";
import { ADD_THEME, LOAD_THEMES } from "./addThemeReducer";

export type TState = {
  courses: string[];
  themes: Record<string, TTopic>;
};
export type TCreateTheme = {
  themeName: string;
  courseName: string;
};

export type TAddThemeAction = {
  type: typeof ADD_THEME;
  payload: {
    themeID: string;
    themeName: string;
    courseName: string;
  };
};
export type TLoadThemesAction = {
  type: typeof LOAD_THEMES;
  payload: Array<{
    themeID: string;
    themeName: string;
    courseName: string;
  }>;
};
