import { geminiModel } from "@appFirebase";
import { createThemesPrompt } from "../model/create-themes-prompt";

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

  return result.response.text();
}
