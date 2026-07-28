export type TFormValues = {
  radioInputFromSurvey: string[];
};

export type TQuestion = {
  id: string;
  question: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
};

export type TQuestionItem = {
  question: string;
  correctAnswer: string;
  wrongAnswer_1: string;
  wrongAnswer_2: string;
  headerQuestionNumber: string;
  index: number;
  errorMessage?: string;
};
