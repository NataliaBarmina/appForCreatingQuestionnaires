export type TQuestionPayload = {
  course?: string;
  topic?: string;
  question?: string;
  answer_1?: string;
  answer_2?: string;
  answer_3?: string;
  questionIndex?: number;
};

export type TEditQuestionAction = {
  type: typeof EDIT_QUESTION;
  payload: TQuestionPayload;
};

export const EDIT_QUESTION = "EDIT_QUESTION";

export const editQuestion = (payload: TQuestionPayload): TEditQuestionAction => ({
  type: EDIT_QUESTION,
  payload,
});
