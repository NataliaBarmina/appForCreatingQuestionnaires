import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fsDeleteQuestion,
  fsListAllQuestions,
  TQuestionFS,
  fsCreateQuestion,
  fsListQuestionsByTheme,
} from "./api";

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

export const deleteQuestionAsync = createAsyncThunk(
  "questions/deleteQuestionAsync",
  async (questionID: string) => {
    await fsDeleteQuestion(questionID);
    return questionID;
  }
);
