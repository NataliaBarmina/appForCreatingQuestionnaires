export type TFields = {
  question: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
};

export type TEditQuestionForm = TFields & {
  questionID: string;
  mode: "generated" | "default";
  onClose?: () => void;
  onDelete?: () => void;
};

export type TAnswerField = {
  name: Exclude<keyof TFields, "question">;
  label: string;
};
