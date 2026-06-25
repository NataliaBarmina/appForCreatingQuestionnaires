import * as yup from "yup";
import { TQuestionFields } from "../../../features/creating/manual/types";

export const createQuestionSchema = (requiredText: string) => {
  const requiredString = yup.string().required(requiredText);

  const schema: yup.ObjectSchema<TQuestionFields> = yup.object({
    selfWrittenQuestion: requiredString,
    selfWrittenAnswer1: requiredString,
    selfWrittenAnswer2: requiredString,
    selfWrittenAnswer3: requiredString,
  });
  return schema;
};
