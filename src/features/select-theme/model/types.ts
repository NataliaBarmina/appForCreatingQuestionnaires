import { CreationMode } from "@entities/model";

export type TTheme = {
  id: string;
  courseName: string;
  themeName: string;
};

export type TThemeList = {
  selectedTopics: TTheme[];
  courseName: string;
  buttonID: CreationMode;
};

export type TThemeSelection = {
  courseName: string;
  buttonID: CreationMode;
  selectedTopics: TTheme[];
};
