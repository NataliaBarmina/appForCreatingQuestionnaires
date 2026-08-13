import { QuestionCreationMode } from "@entities/question";

export type TSelectedTheme = {
  themeId: string;
  courseName: string;
  themeName: string;
};

export type TThemeList = {
  selectedTopics: TSelectedTheme[];
  courseName: string;
  buttonID: QuestionCreationMode;
  handleThemeClick: (theme: TSelectedTheme) => void;
};
export enum ThemeCreationMode {
  AI = "AI THEMES",
  MANUAL = "MANUAL THEMES",
}

export enum ThemeEditMode {
  EDIT = "EDIT",
}
