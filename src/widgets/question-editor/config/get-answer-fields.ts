export type TAnswerField = {
  id: string;
  labelKey: string;
  styles: string;
  value: "answer_1" | "answer_2" | "answer_3";
};

export const answerFields: TAnswerField[] = [
  {
    id: "correctAnswer",
    value: "answer_1",
    labelKey: "formLabel.correctAnswer",
    styles: "mb-6",
  },
  {
    id: "wrongAnswer1",
    value: "answer_2",
    labelKey: "formLabel.wrongAnswer",
    styles: "mb-8",
  },
  {
    id: "wrongAnswer2",
    value: "answer_3",
    labelKey: "formLabel.wrongAnswer",
    styles: "mb-5",
  },
];
