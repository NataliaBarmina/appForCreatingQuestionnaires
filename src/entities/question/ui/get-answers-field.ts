export const getAnswerFields = (
  correctAnswer: string,
  wrongAnswer1: string,
  wrongAnswer2: string
) => {
  return [
    {
      id: "correctAnswer",
      value: correctAnswer,
      labelKey: "formLabel.correctAnswer",
      styles: "mb-6",
    },
    {
      id: "wrongAnswer1",
      value: wrongAnswer1,
      labelKey: "formLabel.wrongAnswer",
      styles: "mb-8",
    },
    {
      id: "wrongAnswer2",
      value: wrongAnswer2,
      labelKey: "formLabel.wrongAnswer",
      styles: "mb-5",
    },
  ];
};
