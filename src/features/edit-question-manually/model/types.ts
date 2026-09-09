export type TQuestionItem = {
  question: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
};

export type TEditQuestionForm = {
  onClose?: () => void;
  questionItem: TQuestionItem & { id: string };
};
