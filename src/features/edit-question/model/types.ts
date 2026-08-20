export type TFields = {
  question: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
};

export type TQuestionItem = {
  id: string;
  question: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
};

export type TQuestionUpdate = Omit<TQuestionItem, "id">;

export type TEditQuestionForm = {
  questionItem: TQuestionItem;
  mode: "generated" | "default";
  onClose?: () => void;
  onDelete?: () => void;
};

export type TAnswerField = {
  name: Exclude<keyof TFields, "question">;
  label: string;
};
