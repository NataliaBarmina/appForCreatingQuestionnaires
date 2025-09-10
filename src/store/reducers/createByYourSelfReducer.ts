import { TQuestion, TSubject } from "../commonTypes";
import { initialState } from "../initialState";
import { TAction } from "../reducers/types";
import { ADD_THEME, DELETE_QUESTION, EDIT_QUESTION } from "../reducers/actions";

function getSelectedTopic(state: TSubject[], subject: string, topic: string) {
  // объект с ключом: выбранный курс
  const objectWithSelectedCourse = state.find((item) => item[subject]);

  // массив с темами в рамках выбранного курса
  const arrayWithSelectedThemes = objectWithSelectedCourse[subject];

  // объект с ключом: выбранная тема
  const objectWithSelectedTopic = arrayWithSelectedThemes.find(
    (item) => item[topic],
  );
  return {
    objectWithSelectedCourse,
    arrayWithSelectedThemes,
    objectWithSelectedTopic,
  };
}

function createByYourSelfReducer(
  state: TSubject[] = initialState,
  action: TAction,
): TSubject[] {
  switch (action.type) {
    case ADD_THEME: {
      const { subject, topic, question, answer_1, answer_2, answer_3 } =
        action.payload;
      const quizData = structuredClone(state);

      const { objectWithSelectedTopic, arrayWithSelectedThemes } =
        getSelectedTopic(quizData, subject, topic);

      const objectWithQuestions: TQuestion = {
        question,
        answer_1,
        answer_2,
        answer_3,
      };

      // Если тема с таким названием (topic) есть,находим массив вопросов этой темы и пушим.
      // Если нет, пушим новый объект с темами

      if (objectWithSelectedTopic) {
        const arrayWithSelectedTopic = objectWithSelectedTopic[topic];
        arrayWithSelectedTopic.push(objectWithQuestions);
      } else {
        arrayWithSelectedThemes.push({ [topic]: [objectWithQuestions] });
      }

      return quizData;
    }
    case DELETE_QUESTION: {
      const { subject, topic, questionIndex } = action.payload;

      if (!topic || questionIndex === undefined) return state;

      const quizData = structuredClone(state);

      const { objectWithSelectedTopic } = getSelectedTopic(
        quizData,
        subject,
        topic,
      );
      if (!objectWithSelectedTopic) return state;

      objectWithSelectedTopic[topic] = objectWithSelectedTopic[topic].filter(
        (_, idx) => idx !== questionIndex,
      );

      return quizData;
    }
    case EDIT_QUESTION: {
      const {
        subject,
        topic,
        questionIndex,
        question,
        answer_1,
        answer_2,
        answer_3,
      } = action.payload;

      if (!topic || questionIndex === undefined) return state;

      const quizData = structuredClone(state);

      const { objectWithSelectedTopic } = getSelectedTopic(
        quizData,
        subject,
        topic,
      );
      if (!objectWithSelectedTopic) return state;

      const arrayWithSelectedQuestions = objectWithSelectedTopic[topic];
      if (!arrayWithSelectedQuestions[questionIndex]) return state;

      arrayWithSelectedQuestions[questionIndex] = {
        question,
        answer_1,
        answer_2,
        answer_3,
      };

      return quizData;
    }

    default:
      return state;
  }
}
export default createByYourSelfReducer;
