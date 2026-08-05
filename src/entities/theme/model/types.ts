import { QuestionCreationMode } from "@entities/question";

export type TTheme = {
  id: string;
  courseName: string;
  themeName: string;
};

export type TThemeList = {
  selectedTopics: TTheme[];
  courseName: string;
  buttonID: QuestionCreationMode;
  handleThemeClick: (theme: TTheme) => void;
};
export enum ThemeCreationMode {
  AI = "AI THEMES",
  MANUAL = "MANUAL THEMES",
}

export enum ThemeEditMode {
  EDIT = "EDIT",
}
