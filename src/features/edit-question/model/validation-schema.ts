import * as yup from "yup";

export const createSchema = (requiredMessage: string) =>
  yup.object({
    question: yup.string().trim().required(requiredMessage),
    correctAnswer: yup.string().trim().required(requiredMessage),
    wrongAnswer1: yup.string().trim().required(requiredMessage),
    wrongAnswer2: yup.string().trim().required(requiredMessage),
  });
