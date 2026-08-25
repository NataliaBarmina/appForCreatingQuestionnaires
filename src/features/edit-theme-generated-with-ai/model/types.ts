export type TEditAIGeneratedTheme = {
  themeName: string;
  courseName: string;
  deleteTheme: (themeName: string) => void;
};

export type TThemeForm = {
  themeName: string;
};
