import {
  TQuestionPayload,
  TAddThemeAction,
  TDeleteQuestionAction,
} from "../reducers/types";

export const ADD_THEME = "ADD_THEME";
export const DELETE_QUESTION = "DELETE-QUESTION";

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
