import { TCreationModeButton } from "@shared/types/commonTypes";

export type TTheme = {
  id: string;
  courseName: string;
  themeName: string;
};

export type TThemeList = {
  selectedTopics: TTheme[];
  courseName: string;
  buttonID: TCreationModeButton;
};

export type TThemeSelection = {
  courseName: string;
  buttonID: TCreationModeButton;
  selectedTopics: TTheme[];
};
