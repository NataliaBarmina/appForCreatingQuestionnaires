import {
  TQuestionPayload,
  TAddThemeAction,
  TDeleteQuestionAction,
  TEditQuestionAction,
  TAddQuestionAction,
} from "./types";

export const DELETE_QUESTION = "DELETE_QUESTION";
export const EDIT_QUESTION = "EDIT_QUESTION";
export const ADD_THEME = "ADD_THEME";
export const ADD_QUESTION = "ADD_QUESTION";

export const addTheme = (payload: TQuestionPayload): TAddThemeAction => ({
  type: ADD_THEME,
  payload,
});

export const deleteQuestion = (
  payload: TQuestionPayload,
): TDeleteQuestionAction => ({
  type: DELETE_QUESTION,
  payload,
});

export const editQuestion = (
  payload: TQuestionPayload,
): TEditQuestionAction => ({
  type: EDIT_QUESTION,
  payload,
});

export const addQuestion = (payload: TQuestionPayload): TAddQuestionAction => ({
  type: ADD_QUESTION,
  payload,
});
