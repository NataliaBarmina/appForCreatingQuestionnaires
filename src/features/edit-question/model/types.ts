export type TEditQuestionForm = {
  question: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
  questionID: string;
  closeDialog: () => void;
};

export type TFields = {
  questionForEditing: string;
  answerForEditing1: string;
  answerForEditing2: string;
  answerForEditing3: string;
};
