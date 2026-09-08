export type TGenerateQuestions = {
  courseName: string;
  themeName: string;
  count: number;
  instructions: string;
  existingQuestions?: string[];
};
