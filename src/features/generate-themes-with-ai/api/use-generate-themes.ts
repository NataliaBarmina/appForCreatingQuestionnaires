import { geminiModel } from "@appFirebase";
import { useQuery } from "@tanstack/react-query";
import { createThemesPrompt } from "../model/create-themes-prompt";
import { queryKeys } from "@shared/query-keys-factory";

export type TGenerateThemes = {
  courseName: string;
  count: number;
  instructions: string;
  existingThemes?: string[];
};

export async function generateThemes({
  courseName,
  count,
  instructions,
  existingThemes,
}: TGenerateThemes) {
  const prompt = createThemesPrompt({
    courseName,
    count,
    instructions,
    existingThemes,
  });

  const result = await geminiModel.generateContent(prompt);

  return JSON.parse(result.response.text());
}

export const useGenerateThemes = ({
  courseName,
  count,
  instructions,
  existingThemes,
}: TGenerateThemes) => {
  return useQuery({
    queryKey: queryKeys.generatedThemesByCourse(courseName),
    queryFn: () => generateThemes({ courseName, count, instructions, existingThemes }),
    enabled: false, // queryFn не запускается автоматически- для связки с refetch
  });
};
