import { geminiModel } from "@appFirebase";
import { useQuery } from "@tanstack/react-query";

import { createQuestionsPrompt } from "../model/create-questions-prompt";
import { TGenerateQuestions } from "../model/types";
import { queryKeys } from "@shared/query-keys-factory";

export async function generateQuestions({
  courseName,
  themeName,
  count,
  instructions,
  existingQuestions,
}: TGenerateQuestions) {
  const prompt = createQuestionsPrompt({
    courseName,
    themeName,
    count,
    instructions,
    existingQuestions,
  });

  const result = await geminiModel.generateContent(prompt);

  return JSON.parse(result.response.text());
}

export const useGenerateQuestions = ({
  courseName,
  themeName,
  count,
  instructions,
  existingQuestions,
}: TGenerateQuestions) => {
  return useQuery({
    queryKey: queryKeys.generatedQuestionsByTheme(themeName),
    queryFn: () =>
      generateQuestions({ themeName, count, instructions, existingQuestions, courseName }),
    enabled: false, // queryFn не запускается автоматически- для связки с refetch
  });
};
