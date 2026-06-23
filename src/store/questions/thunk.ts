import { createAsyncThunk } from "@reduxjs/toolkit";
import { fsListAllQuestions, TQuestionFS } from "./api";
import { fsCreateQuestion, fsListQuestionsByTheme } from "./api";

export const addQuestionAsync = createAsyncThunk(
  "questions/addQuestionAsync",
  async (payload: TQuestionFS) => {
    return await fsCreateQuestion(payload);
  }
);

export const loadQuestionsAsync = createAsyncThunk(
  "questions/loadQuestionsAsync",
  async (themeID: string) => {
    return await fsListQuestionsByTheme(themeID);
  }
);

export const loadAllQuestionsAsync = createAsyncThunk(
  "questions/loadAllQuestionsAsync",
  async () => await fsListAllQuestions()
);
