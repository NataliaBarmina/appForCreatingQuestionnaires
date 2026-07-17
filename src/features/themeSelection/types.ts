import { CreationModeButton } from "@shared/types/commonTypes";

export type TTheme = {
  id: string;
  courseName: string;
  themeName: string;
};

export type TThemeList = {
  selectedTopics: TTheme[];
  courseName: string;
  buttonID: CreationModeButton;
};

export type TThemeSelection = {
  courseName: string;
  buttonID: CreationModeButton;
  selectedTopics: TTheme[];
};
