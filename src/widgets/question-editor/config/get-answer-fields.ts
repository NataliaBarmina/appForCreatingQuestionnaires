export type TAnswerField = {
  id: string;
  labelKey: string;
  value: "answer_1" | "answer_2" | "answer_3";
};

export const answerFields: TAnswerField[] = [
  {
    id: "correctAnswer",
    value: "answer_1",
    labelKey: "formLabel.correctAnswer",
  },
  {
    id: "wrongAnswer1",
    value: "answer_2",
    labelKey: "formLabel.wrongAnswer",
  },
  {
    id: "wrongAnswer2",
    value: "answer_3",
    labelKey: "formLabel.wrongAnswer",
  },
];
