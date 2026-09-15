export const queryKeys = {
  questions: ["questions"],
  questionsByTheme: (themeId: string) => [...queryKeys.questions, themeId],

  generatedQuestions: ["generatedQuestions"],
  generatedQuestionsByTheme: (themeName: string) => [...queryKeys.generatedQuestions, themeName],

  themes: ["themes"],
  themesByCourse: (courseName: string) => [...queryKeys.themes, courseName],

  generatedThemes: ["generatedThemes"],
  generatedThemesByCourse: (courseName: string) => [...queryKeys.generatedThemes, courseName],
};
