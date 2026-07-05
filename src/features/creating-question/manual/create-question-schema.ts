import * as yup from "yup";

const createRequiredString = (requiredText: string) => yup.string().trim().required(requiredText);

export const createQuestionSchema = (requiredText: string) =>
  yup.object({
    selfWrittenQuestion: createRequiredString(requiredText),
    selfWrittenAnswer1: createRequiredString(requiredText),
    selfWrittenAnswer2: createRequiredString(requiredText),
    selfWrittenAnswer3: createRequiredString(requiredText),
  });
// .required(); //без него тип всей схемы потенциально может допускать undefined
