import { geminiModel } from "@appFirebase";
import { createThemesPrompt } from "../model/create-themes-prompt";
import { useMutation, useQuery } from "@tanstack/react-query";

export async function generateThemes({
  courseName,
  count,
  instructions,
  existingThemes,
}: {
  courseName: string;
  count: number;
  instructions: string;
  existingThemes?: string[];
}) {
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
}: {
  courseName: string;
  count: number;
  instructions: string;
  existingThemes?: string[];
}) => {
  return useQuery({
    queryKey: ["generatedThemes", courseName],
    queryFn: () => generateThemes({ courseName, count, instructions, existingThemes }),
    enabled: false, // queryFn не запускается автоматически- для связки с refetch
  });
};
