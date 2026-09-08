import * as yup from "yup";

export const createSchema = (requiredMessage: string) =>
  yup.object({
    question: yup.string().trim().required(requiredMessage),
    answer_1: yup.string().trim().required(requiredMessage),
    answer_2: yup.string().trim().required(requiredMessage),
    answer_3: yup.string().trim().required(requiredMessage),
  });
