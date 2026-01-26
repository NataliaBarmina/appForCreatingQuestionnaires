import { v4 as uuidv4 } from "uuid";
import type { TSelectedTopic } from "@/shared/types/commonTypes";

type TState = {
  courses: string[];
  themes: Record<string, TSelectedTopic>;
};

const initialState: TState = {
  courses: ["JavaScript", "CSS", "TypeScript", "HTML", "Cmd", "Git", "React", "Прочее"],
  themes: {},
};

const ADD_THEMES = "ADD_THEMES";

export const addThemes = (payload: { themeName: string; courseName: string }) => ({
  type: ADD_THEMES,
  payload,
});

type TAddThemesAction = {
  type: typeof ADD_THEMES;
  payload: {
    themeName: string;
    courseName: string;
  };
};

export const addThemeReducer = (state = initialState, action: TAddThemesAction): TState => {
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

//todo -удалить
// type TQuestion = {
//   id: string;
//   courseName: string;
//   themeID: string;
//   question: string;
//   answer_1: string;
//   answer_2: string;
//   answer_3: string;
// };

// questions: { [key: string]: TQuestion };

// questions: {},

// const ADD_QUESTIONS = "ADD_QUESTIONS";
// const DELETE_QUESTION = "DELETE_QUESTION";
// const EDIT_QUESTION = "EDIT_QUESTION";

// type TAddQuestionsAction = {
//   type: typeof ADD_QUESTIONS;
//   payload: {
//     courseName: string;
//     themeID: string;
//     question: string;
//     answer_1: string;
//     answer_2: string;
//     answer_3: string;
//   };
// };

// type TDeleQuestionAction = {
//   type: typeof DELETE_QUESTION;
//   payload: {
//     questionID: string;
//   };
// };

// type TEditQuestion = {
//   type: typeof EDIT_QUESTION;
//   payload: {
//     questionID: string;
//     question: string;
//     answer_1: string;
//     answer_2: string;
//     answer_3: string;
//   };
// };

// export const addQuestions = (payload: {
//   courseName: string;
//   themeID: string;
//   question: string;
//   answer_1: string;
//   answer_2: string;
//   answer_3: string;
// }) => ({
//   type: ADD_QUESTIONS,
//   payload,
// });

// export const deleteQuestion = (payload: { questionID: string }) => ({
//   type: DELETE_QUESTION,
//   payload,
// });

// export const editQuestion = (payload: {
//   questionID: string;
//   question: string;
//   answer_1: string;
//   answer_2: string;
//   answer_3: string;
// }) => ({ type: EDIT_QUESTION, payload });

// case ADD_QUESTIONS: {
//   const questionID = uuidv4();

//   const { courseName, themeID, question, answer_1, answer_2, answer_3 } = action.payload;

//   return {
//     ...state,
//     questions: {
//       ...state.questions,
//       [questionID]: {
//         id: questionID,
//         courseName,
//         themeID,
//         question,
//         answer_1,
//         answer_2,
//         answer_3,
//       },
//     },
//   };
// }
// case DELETE_QUESTION: {
//   const { questionID } = action.payload;

//   const { [questionID]: _, ...remainingQuestions } = state.questions;

//   return {
//     ...state,
//     questions: remainingQuestions,
//   };
// }
// case EDIT_QUESTION: {
//   const { questionID, question, answer_1, answer_2, answer_3 } = action.payload;

//   const existing = state.questions[questionID];
//   if (!existing) return state;

//   return {
//     ...state,
//     questions: {
//       ...state.questions,
//       [questionID]: {
//         ...existing,
//         question,
//         answer_1,
//         answer_2,
//         answer_3,
//       },
//     },
//   };
// }
