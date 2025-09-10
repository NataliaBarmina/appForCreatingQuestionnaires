import {
  TQuestionPayload,
  TAddThemeAction,
  TDeleteQuestionAction,
  TEditQuestionAction,
} from "../reducers/types";

export const ADD_THEME = "ADD_THEME";
export const DELETE_QUESTION = "DELETE-QUESTION";
export const EDIT_QUESTION = "EDIT-QUESTION";

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
