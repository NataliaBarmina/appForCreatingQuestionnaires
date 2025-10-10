import {
  ADD_THEME,
  DELETE_QUESTION,
  EDIT_QUESTION,
  ADD_QUESTION,
} from "../reducers/actions";

export type TQuestionPayload = {
  course?: string;
  topic?: string;
  question?: string;
  answer_1?: string;
  answer_2?: string;
  answer_3?: string;
  questionIndex?: number;
};

export type TAddThemeAction = {
  type: typeof ADD_THEME;
  payload: TQuestionPayload;
};

export type TAddQuestionAction = {
  type: typeof ADD_QUESTION;
  payload: TQuestionPayload;
};

export type TDeleteQuestionAction = {
  type: typeof DELETE_QUESTION;
  payload: TQuestionPayload;
};

export type TEditQuestionAction = {
  type: typeof EDIT_QUESTION;
  payload: TQuestionPayload;
};

export type TAction =
  | TAddThemeAction
  | TDeleteQuestionAction
  | TEditQuestionAction
  | TAddQuestionAction;
