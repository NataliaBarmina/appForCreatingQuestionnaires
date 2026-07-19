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

export type TQuizQuestion = {
  question: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
};

// todo- add types
export enum TCreationModeButton {
  AI = "AI",
  MANUAL = "MANUAL",
  AI_QUESTIONS = "AI_QUESTIONS",
  MANUAL_QUESTIONS = "MANUAL_QUESTIONS",
  AI_THEMES = "AI_THEMES",
  MANUAL_THEMES = "MANUAL_THEMES",
}
