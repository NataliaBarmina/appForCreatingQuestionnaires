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
const ADD_QUESTIONS = "ADD_QUESTIONS"

type TAddThemesAction = {
  type: typeof ADD_THEMES;
  payload: {
    themeName: string;
    courseName: string;
  };
};

type TAddQuestionsAction = {
  type: typeof ADD_QUESTIONS;
  payload:{
    courseName: string;
    themeID: string;
    question: string;
    answer_1: string;
    answer_2: string;
    answer_3: string;
  }
}

export type TActions =
  | TAddThemesAction
  | TAddQuestionsAction

export const addThemes = (payload: {
  themeName: string;
  courseName: string;
}) => ({
  type: ADD_THEMES,
  payload,
});

export const addQuestions = (payload: {
  courseName: string;
  themeID: string;
  question: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
}) => ({
  type: ADD_QUESTIONS,
  payload,
});

const addThemeReducer = (state = initialState2, action: TActions) => {
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
    case ADD_QUESTIONS: {
      const questionID = uuidv4();

      const {courseName, themeID, question, answer_1, answer_2, answer_3} = action.payload;

      return {
        ...state,
        questions: {
          ...state.questions,
          [questionID]: {id: questionID, courseName, themeID, question, answer_1, answer_2, answer_3}
        }
      }
    }
    default:
      return state;
  }
};
export default addThemeReducer;
