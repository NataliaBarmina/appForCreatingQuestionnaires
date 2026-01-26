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

export type TTopic = {
  themeID: string;
  themeName: string;
  courseName: string;
  buttonID?: string;
};

export type TQuizQuestion = {
  question: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
};

export enum CreationModeButton {
  AI = "AI",
  MANUAL = "MANUAL",
  EDITING = "EDITING",
}
