import { TState, TAddThemeAction, TLoadThemesAction } from "./types";

const initialState: TState = {
  courses: ["JavaScript", "CSS", "TypeScript", "HTML", "Cmd", "Git", "React", "Прочее"],
  themes: {},
};

export const ADD_THEME = "ADD_THEME";
export const LOAD_THEMES = "LOAD_THEMES";

export const addThemeReducer = (
  state = initialState,
  action: TAddThemeAction | TLoadThemesAction
): TState => {
  switch (action.type) {
    case LOAD_THEMES: {
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
    case ADD_THEME: {
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
