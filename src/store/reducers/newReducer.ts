import { v4 as uuidv4 } from "uuid";

const initialState2 = {
  courses: {
    JavaScript: "JavaScript",
    CSS: "CSS",
    TypeScript: "TypeScript",
    HTML: "HTML",
    Cmd: "Cmd",
    Git: "Git",
    React: "React",
    Прочее: "Прочее",
  },
  themes: {},
  questions: {},
};

const ADD_THEMES = "ADD_THEMES";

type TAddThemeAction = {
  type: typeof ADD_THEMES;
  payload: {
    themeName: string;
    courseName: string;
  };
};

export const addThemes = (payload: {
  themeName: string;
  courseName: string;
}) => ({
  type: ADD_THEMES,
  payload,
});

const addThemeReducer = (state = initialState2, action: TAddThemeAction) => {
  switch (action.type) {
    case ADD_THEMES: {
      const themeID = uuidv4();

      const { themeName, courseName } = action.payload;

      return {
        ...state,
        themes: {
          ...state.themes,
          [themeID]: { id: themeID, themeName, courseName },
        },
      };
    }
    default:
      return state;
  }
};
export default addThemeReducer;
