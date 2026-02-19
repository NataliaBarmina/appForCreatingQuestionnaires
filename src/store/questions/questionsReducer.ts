import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TQuestion } from "@shared/types/commonTypes";
import { addQuestionAsync, loadQuestionsAsync, loadAllQuestionsAsync } from "./thunk";

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
  extraReducers: (builder) => {
    builder
      .addCase(addQuestionAsync.fulfilled, (state, action: PayloadAction<TQuestion>) => {
        state.questions[action.payload.questionID] = action.payload;
      })
      .addCase(loadQuestionsAsync.fulfilled, (state, action: PayloadAction<TQuestion[]>) => {
        state.questions = {};
        action.payload.forEach((q) => {
          state.questions[q.questionID] = q;
        });
      })
      .addCase(loadAllQuestionsAsync.fulfilled, (state, action: PayloadAction<TQuestion[]>) => {
        state.questions = {};
        action.payload.forEach((q) => {
          state.questions[q.questionID] = q;
        });
      });
  },
});
export const { deleteQuestion, editQuestion } = questionSlice.actions;
export const questionsReducer = questionSlice.reducer;
