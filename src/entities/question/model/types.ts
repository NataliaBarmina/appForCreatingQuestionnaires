export type TQuestionList = {
  answer_1: string;
  answer_2: string;
  answer_3: string;
  id: string;
  question: string;
};

export type TQuestionDetail = Omit<TQuestionList, "questionID">;

export enum QuestionCreationMode {
  AI = "AI",
  MANUAL = "MANUAL",
}

export enum QuestionEditMode {
  EDIT = "EDIT",
}
