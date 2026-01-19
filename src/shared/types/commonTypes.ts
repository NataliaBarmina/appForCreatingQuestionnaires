export type TQuestion = {
  courseName?: string;
  themeID?: string;
  questionID?: string;
  question?: string;
  answer_1?: string;
  answer_2?: string;
  answer_3?: string;
};

export type TTopic = Record<string, TQuestion[]>;

export type TSelectedTopic = {
  id: string;
  themeName: string;
  courseName: string;
};

export type TQuizData = {
  buttonLabel?: string;
  course?: string;
  theme?: string;
  themeID?: string;
  questionsList?: TQuestion[];
  buttonID?: string;
  selectedTopicName?: string[];
  selectedTopics?: Array<Partial<TSelectedTopic>>;
};

export enum CreationModeButton {
  AI = "AI",
  MANUAL = "MANUAL",
  EDITING = "EDITING",
}
