import * as yup from "yup";

const createRequiredString = (requiredText: string) => yup.string().trim().required(requiredText);

export const createQuestionSchema = (requiredText: string, duplicateAnswerText: string) =>
  yup.object({
    selfWrittenQuestion: createRequiredString(requiredText),

    selfWrittenAnswer1: createRequiredString(requiredText),

    selfWrittenAnswer2: createRequiredString(requiredText).notOneOf(
      [yup.ref("selfWrittenAnswer1")],
      duplicateAnswerText
    ),

    selfWrittenAnswer3: createRequiredString(requiredText).notOneOf(
      [yup.ref("selfWrittenAnswer1"), yup.ref("selfWrittenAnswer2")],
      duplicateAnswerText
    ),
  });
