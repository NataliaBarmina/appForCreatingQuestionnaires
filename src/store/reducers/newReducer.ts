import { v4 as uuidv4 } from "uuid";

type TTheme = {
  id: string;
  themeName: string;
  courseName: string;
};

type TQuestion = {
  id: string;
  courseName: string;
  themeID: string;
  question: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
};

type TState = {
  courses: string[];
  themes: { [key: string]: TTheme };
  questions: { [key: string]: TQuestion };
};

const initialState2: TState = {
  courses: ["JavaScript", "CSS", "TypeScript", "HTML", "Cmd", "Git", "React", "Прочее"],
  themes: {},
  questions: {},
};

const ADD_THEMES = "ADD_THEMES";
const ADD_QUESTIONS = "ADD_QUESTIONS";
const DELETE_QUESTION = "DELETE_QUESTION";

type TAddThemesAction = {
  type: typeof ADD_THEMES;
  payload: {
    themeName: string;
    courseName: string;
  };
};

type TAddQuestionsAction = {
  type: typeof ADD_QUESTIONS;
  payload: {
    courseName: string;
    themeID: string;
    question: string;
    answer_1: string;
    answer_2: string;
    answer_3: string;
  };
};

type TDeleQuestionAction = {
  type: typeof DELETE_QUESTION;
  payload: {
    questionID: string;
  };
};

export type TActions = TAddThemesAction | TAddQuestionsAction | TDeleQuestionAction;

export const addThemes = (payload: { themeName: string; courseName: string }) => ({
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

export const deleteQuestion = (payload: { questionID: string }) => ({
  type: DELETE_QUESTION,
  payload,
});

const addThemeReducer = (state = initialState2, action: TActions): TState => {
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

      const { courseName, themeID, question, answer_1, answer_2, answer_3 } = action.payload;

      return {
        ...state,
        questions: {
          ...state.questions,
          [questionID]: {
            id: questionID,
            courseName,
            themeID,
            question,
            answer_1,
            answer_2,
            answer_3,
          },
        },
      };
    }
    case DELETE_QUESTION: {
      const { questionID } = action.payload;

      const { [questionID]: _, ...remainingQuestions } = state.questions;

      return {
        ...state,
        questions: remainingQuestions,
      };
    }
    default:
      return state;
  }
};
export default addThemeReducer;
