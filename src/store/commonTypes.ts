export type TQuestion = {
  question: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
};

export type TTopic = Record<string, TQuestion[]>; // тема: массив вопросов

export type TSubject = Record<string, TTopic[]>; //курс: массив тем

export type TQuizSubjects = TSubject[]; //массив курсов

export type TQuizState = { quizData: TQuizSubjects }; // состояние

export type TQuizData = {
  buttonLabel?: string;
  course?: string;
  theme?: string;
  questionsList?: TQuestion[];
  listOfThemes?: TTopic[];
  buttonID?: string;
};

export enum CreationModeButton {
  AI = "AI",
  MANUAL = "MANUAL",
  EDITING = "EDITING",
}
