import * as yup from "yup";

export const createSchema = (requiredMessage: string) =>
  yup.object({
    questionForEditing: yup.string().trim().required(requiredMessage),
    answerForEditing1: yup.string().trim().required(requiredMessage),
    answerForEditing2: yup.string().trim().required(requiredMessage),
    answerForEditing3: yup.string().trim().required(requiredMessage),
  });
