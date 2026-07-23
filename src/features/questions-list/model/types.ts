export type TQuestionList = {
  answer_1: string;
  answer_2: string;
  answer_3: string;
  id: string;
  question: string;
};

export type TEditQuestionDialog = {
  question: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
  questionID: string;
};

export type TEditQuestionForm = TEditQuestionDialog & {
  closeDialog: () => void;
};
