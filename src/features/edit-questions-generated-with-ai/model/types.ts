export type TFields = {
  question: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
};

export type TEditAIGeneratedQuestions = {
  questionItem: TFields;
  // courseName: string;
  // themeName: string;
  themeId: string;
  deleteQuestion: (questionName: string) => void;
};

export type TAnswerField = {
  name: Exclude<keyof TFields, "question">;
  label: string;
};
