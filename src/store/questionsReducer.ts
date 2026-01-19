import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import type { TQuestion } from "@shared/types/commonTypes";

type TState = {
  questions: Record<string, TQuestion>;
};

const initialState: TState = {
  questions: {},
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestions(state, action: PayloadAction<TQuestion>) {
      const ID = uuidv4();

      const { courseName, themeID, question, answer_1, answer_2, answer_3 } = action.payload;

      state.questions[ID] = {
        questionID: ID,
        courseName,
        themeID,
        question,
        answer_1,
        answer_2,
        answer_3,
      };
    },
    deleteQuestion(state, action: PayloadAction<TQuestion>) {
      const { questionID } = action.payload;
      delete state.questions[questionID];
    },
    editQuestion(state, action: PayloadAction<TQuestion>) {
      const { questionID, question, answer_1, answer_2, answer_3 } = action.payload;

      const existing = state.questions[questionID];

      state.questions[questionID] = {
        ...existing,
        question,
        answer_1,
        answer_2,
        answer_3,
      };
    },
  },
});
export const { addQuestions, deleteQuestion, editQuestion } = questionSlice.actions;
export const questionsReducer = questionSlice.reducer;
