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

export type TBlockedFieldWithAnswersAndQuestionsProps = Omit<TEditQuestionDialog, "questionID">;

export type TFields = {
  questionForEditing: string;
  answerForEditing1: string;
  answerForEditing2: string;
  answerForEditing3: string;
};
