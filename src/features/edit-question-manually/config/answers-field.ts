export type TAnswerField = {
  name: "answer_1" | "answer_2" | "answer_3";
  label: string;
};

export const answerFields: TAnswerField[] = [
  { name: "answer_1", label: "formLabel.correctAnswer" },
  { name: "answer_2", label: "formLabel.wrongAnswer" },
  { name: "answer_3", label: "formLabel.wrongAnswer" },
];
