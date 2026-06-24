import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addQuestionAsync,
  loadQuestionsAsync,
  loadAllQuestionsAsync,
  deleteQuestionAsync,
  editQuestionAsync,
} from "./thunks";

type TQuestion = {
  questionID: string;
};

type TState = {
  questions: Record<string, TQuestion>;
};

const initialState: TState = {
  questions: {},
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addQuestionAsync.fulfilled, (state, action: PayloadAction<TQuestion>) => {
        state.questions[action.payload.questionID] = action.payload;
      })
      .addCase(loadQuestionsAsync.fulfilled, (state, action: PayloadAction<TQuestion[]>) => {
        state.questions = {}; // очищаем стэйт
        action.payload.forEach((q) => {
          state.questions[q.questionID] = q; // заполняем
        });
      })
      .addCase(loadAllQuestionsAsync.fulfilled, (state, action: PayloadAction<TQuestion[]>) => {
        state.questions = {};
        action.payload.forEach((q) => {
          state.questions[q.questionID] = q;
        });
      })
      .addCase(deleteQuestionAsync.fulfilled, (state, action: PayloadAction<string>) => {
        delete state.questions[action.payload];
      })
      .addCase(
        editQuestionAsync.fulfilled,
        (state, action: PayloadAction<{ questionID: string; patch: Partial<TQuestion> }>) => {
          const { questionID, patch } = action.payload;
          state.questions[questionID] = { ...state.questions[questionID], ...patch };
        }
      );
  },
});

export const questionsReducer = questionSlice.reducer;
