import { TQuestion, TSubject } from "../commonTypes";
import { initialState } from "../initialState";
import { TAction } from "../reducers/types";
import { ADD_THEME, DELETE_QUESTION } from "../reducers/actions";

function createByYourSelfReducer(
  state: TSubject[] = initialState,
  action: TAction,
): TSubject[] {
  switch (action.type) {
    case ADD_THEME: {
      const { subject, topic, question, answer_1, answer_2, answer_3 } =
        action.payload;
      const quizData = structuredClone(state);

      const objectWithSelectedCourse = quizData.find((item) => item[subject]); // объект с ключом: выбранный курс

      const arrayWithSelectedThemes = objectWithSelectedCourse[subject]; // массив с темами в рамках выбранного курса

      const objectWithSelectedTopic = arrayWithSelectedThemes.find(
        (item) => item[topic],
      ); // объект с ключом: выбранная тема

      const objectWithQuestions: TQuestion = {
        question,
        answer_1,
        answer_2,
        answer_3,
      };

      const newTopic = { [topic]: [objectWithQuestions] }; //новый объект тема: массив с вопросами

      // Если тема с таким названием (topic) есть,находим массив вопросов этой темы и пушим.
      // Если нет, пушим новый объект с темами

      if (objectWithSelectedTopic) {
        const arrayWithSelectedTopic = objectWithSelectedTopic[topic]; // массив с вопросами в рамках выбранной темы
        arrayWithSelectedTopic.push(objectWithQuestions);
      } else {
        arrayWithSelectedThemes.push(newTopic);
      }

      return quizData;
    }
    case DELETE_QUESTION: {
      const { subject, topic, questionIndex } = action.payload;

      if (!topic || questionIndex === undefined) return state;

      const quizData = structuredClone(state);

      const objectWithSelectedCourse = quizData.find((item) => item[subject]);

      const arrayWithSelectedThemes = objectWithSelectedCourse[subject];
      const objectWithSelectedTopic = arrayWithSelectedThemes.find(
        (item) => item[topic],
      );
      if (!objectWithSelectedTopic) return state;

      objectWithSelectedTopic[topic] = objectWithSelectedTopic[topic].filter(
        (_, idx) => idx !== questionIndex,
      );

      return quizData;
    }
    default:
      return state;
  }
}
export default createByYourSelfReducer;
