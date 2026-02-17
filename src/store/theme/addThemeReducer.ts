import { TState, TAddThemeFromFirestoreAction, TLoadThemesFromFirestoreAction } from "./types";

const initialState: TState = {
  courses: ["JavaScript", "CSS", "TypeScript", "HTML", "Cmd", "Git", "React", "Прочее"],
  themes: {},
};

export const ADD_THEME_FROM_FIRESTORE = "ADD_THEME_FROM_FIRESTORE";
export const LOAD_THEMES_FROM_FIRESTORE = "LOAD_THEMES_FROM_FIRESTORE";

export const addThemeReducer = (
  state = initialState,
  action: TAddThemeFromFirestoreAction | TLoadThemesFromFirestoreAction
): TState => {
  switch (action.type) {
    case LOAD_THEMES_FROM_FIRESTORE: {
      const nextThemes = { ...state.themes };

      action.payload.forEach((t) => {
        nextThemes[t.themeID] = {
          themeID: t.themeID,
          themeName: t.themeName,
          courseName: t.courseName,
        };
      });

      return { ...state, themes: nextThemes };
    }
    case ADD_THEME_FROM_FIRESTORE: {
      const { themeID, themeName, courseName } = action.payload;

      return {
        ...state,
        themes: {
          ...state.themes,
          [themeID]: { themeID, themeName, courseName },
        },
      };
    }

    default:
      return state;
  }
};
