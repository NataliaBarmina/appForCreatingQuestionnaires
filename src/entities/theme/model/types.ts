import { CreationMode } from "@entities/theme/model/creation-mode-button";

export type TTheme = {
  id: string;
  courseName: string;
  themeName: string;
};

export type TThemeList = {
  selectedTopics: TTheme[];
  courseName: string;
  buttonID: CreationMode;
  handleThemeClick: (theme: TTheme) => void;
};
