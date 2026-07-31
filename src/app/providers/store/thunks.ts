import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteQuestion,
  //  listQuestionsByTheme,
  editQuestion,
} from "./api";

export type TQuestion = {
  courseName?: string;
  themeName?: string;
  themeID?: string;
  questionID?: string;
  question?: string;
  answer_1?: string;
  answer_2?: string;
  answer_3?: string;
};

// export const loadQuestionsAsync = createAsyncThunk(
//   "questions/loadQuestions",
//   async (themeID: string) => {
//     return await listQuestionsByTheme(themeID);
//   }
// );

export const deleteQuestionAsync = createAsyncThunk(
  "questions/deleteQuestion",
  async (questionID: string) => {
    await deleteQuestion(questionID);
    return questionID;
  }
);

export const editQuestionAsync = createAsyncThunk(
  "questions/editQuestion",
  async (payload: { questionID: string; patch: Partial<TQuestion> }) => {
    await editQuestion(payload.questionID, payload.patch);
    return payload;
  }
);
