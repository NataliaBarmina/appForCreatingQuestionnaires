import { TCourse } from "../commonTypes";

export function getThemes(state: TCourse[], course: string) {
  const selectedCourse = state.find((item) => item.hasOwnProperty(course));
  return selectedCourse[course];
}

export function getSelectedTopic(
  state: TCourse[],
  course: string,
  topic: string,
) {
  // объект с ключом: выбранный курс
  const selectedCourse = state.find((item) => item[course]);
  // массив с темами в рамках выбранного курса
  const selectedThemes = selectedCourse[course];

  // объект с ключом: выбранная тема
  const selectedTopic = selectedThemes.find((item) => item[topic]);
  return {
    selectedCourse,
    selectedThemes,
    selectedTopic,
  };
}
