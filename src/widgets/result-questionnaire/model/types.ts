export type TQuestion = {
  courseName: string;
  themeName: string;
  themeId: string;
  questionID: string;
  question: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
};

export type TQuestionItem = {
  index: number;
  question: string;
  answer_1: string;
  answer_2: string;
  questionNumber: string;
  correctAnswer: string;
  yourAnswer: string;
};
