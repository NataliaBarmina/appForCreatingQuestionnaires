import { TCourse } from "@shared/types/commonTypes";

export function getThemes(state: TCourse[], course: string) {
  const selectedCourse = state.find((item) => item.hasOwnProperty(course));
  return selectedCourse[course]; // массив с темами в рамках выбранного курса
}

export function getQuestions(state: TCourse[], course: string, topic: string) {
  const selectedThemes = getThemes(state, course);
  const selectedTopic = selectedThemes.find((item) => item[topic]); // объект с ключом: выбранная тема

  return selectedTopic[topic]; //массив вопросов
}
