import { TQuestion, TCourse } from "../commonTypes";
import { initialState } from "../initialState";
import { TAction } from "../reducers/types";
import { ADD_THEME, DELETE_QUESTION, EDIT_QUESTION } from "../reducers/actions";

function getSelectedTopic(state: TCourse[], subject: string, topic: string) {
  // объект с ключом: выбранный курс
  const selectedCourse = state.find((item) => item[subject]);

  // массив с темами в рамках выбранного курса
  const selectedThemes = selectedCourse[subject];

  // объект с ключом: выбранная тема
  const objectWithSelectedTopic = selectedThemes.find((item) => item[topic]);
  return {
    selectedCourse,
    selectedThemes,
    objectWithSelectedTopic,
  };
}

function createByYourSelfReducer(
  state: TCourse[] = initialState,
  action: TAction,
): TCourse[] {
  switch (action.type) {
    case ADD_THEME: {
      const { subject, topic, question, answer_1, answer_2, answer_3 } =
        action.payload;
      const quizData = structuredClone(state);

      const { objectWithSelectedTopic, selectedThemes } = getSelectedTopic(
        quizData,
        subject,
        topic,
      );

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
        selectedThemes.push({ [topic]: [objectWithQuestions] });
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
