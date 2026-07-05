import * as yup from "yup";

export const createThemeSchema = (requiredText: string) =>
  yup.object({
    topicName: yup.string().trim().required(requiredText),
  });
