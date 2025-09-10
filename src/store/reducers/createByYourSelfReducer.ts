import { TQuestion, TQuizSubjects } from "@common/dataExample";

const ADD_THEME = "ADD_THEME";
export type TQuizState = {
  quizData: TQuizSubjects;
};

export type TAddThemeAction = {
  type: typeof ADD_THEME;
  payload: {
    subject: string;
    topic: string;
    question: string;
    answer_1: string;
    answer_2: string;
    answer_3: string;
  };
};

export type TQuizAction = TAddThemeAction; //todo -возможно пригодится в будушем для расширения типов экшен (type TQuizAction = TAddThemeAction | TDeleteThemeAction | TUpdateQuestionAction);

const initialState: TQuizState = {
  quizData: [
    { JavaScript: [] },
    { CSS: [] },
    { TypeScript: [] },
    { HTML: [] },
    { Git: [] },
    { React: [] },
    { Cmd: [] },
    { Прочее: [] },
  ],
};

export const addTheme = (
  subject: string,
  topic: string,
  question: string,
  answer_1: string,
  answer_2: string,
  answer_3: string,
): TAddThemeAction => ({
  type: ADD_THEME,
  payload: { subject, topic, question, answer_1, answer_2, answer_3 },
});

function createByYourSelfReducer(
  state: TQuizState = initialState,
  action: TQuizAction,
): TQuizState {
  switch (action.type) {
    case ADD_THEME: {
      const { subject, topic, question, answer_1, answer_2, answer_3 } =
        action.payload;
      const quizData = structuredClone(state.quizData); // делаем глубокую копию объекта

      const objectWithSelectedCourse = quizData.find((item) => item[subject]); // объект с ключом: выбранный курс

      const arrayWithSelectedThemes = objectWithSelectedCourse[subject]; // массив с темами в рамках выбранного курса

      const objectWithSelectedTopic = arrayWithSelectedThemes.find(
        (theme) => theme[topic],
      ); // объект с ключом: выбранная тема

      const objectWithQuestions: TQuestion = {
        question,
        answer_1,
        answer_2,
        answer_3,
      };

      // Если тема с таким названием (topic) есть,находим массив вопросов этой темы и пушим.
      // Если нет, создаём новый объект с ключом — названием темы и значением- массивом с вопросом и ответами. Пушим.

      if (objectWithSelectedTopic) {
        objectWithSelectedTopic[topic].push(objectWithQuestions);
      } else {
        arrayWithSelectedThemes.push({
          [topic]: [objectWithQuestions],
        });
      }

      return {
        ...state,
        quizData,
      };
    }
    default:
      return state;
  }
}
export default createByYourSelfReducer;
