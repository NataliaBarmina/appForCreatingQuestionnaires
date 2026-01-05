export type TQuestion = {
  question: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
};

export type TTopic = Record<string, TQuestion[]>; // тема: массив вопросов

export type TCourse = Record<string, TTopic[]>; //курс: массив тем

export type TSelectedTopic = {
  id: string;
  themeName: string;
  courseName: string;
}

export type TQuizData = {
  buttonLabel?: string;
  course?: string;
  theme?: string;
  themeID?: string;
  questionsList?: TQuestion[];
  buttonID?: string;
  selectedTopicName?: string[];
  selectedTopics?: Array<Partial<TSelectedTopic>> ;
};

export enum CreationModeButton {
  AI = "AI",
  MANUAL = "MANUAL",
  EDITING = "EDITING",
}
