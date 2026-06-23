import type { TTopic } from "@shared/types/commonTypes";
import { ADD_THEME_FROM_FIRESTORE, LOAD_THEMES_FROM_FIRESTORE } from "./addThemeReducer";

export type TState = {
  courses: string[];
  themes: Record<string, TTopic>;
};

export type TAddThemeFromFirestoreAction = {
  type: typeof ADD_THEME_FROM_FIRESTORE;
  payload: {
    themeID: string;
    themeName: string;
    courseName: string;
  };
};
export type TLoadThemesFromFirestoreAction = {
  type: typeof LOAD_THEMES_FROM_FIRESTORE;
  payload: Array<{
    themeID: string;
    themeName: string;
    courseName: string;
  }>;
};
