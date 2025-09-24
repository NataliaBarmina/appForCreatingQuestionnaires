import { theme } from "@common/themeForMaterialUI";
import { TQuestion, TCourse } from "../commonTypes";
import { initialState } from "../initialState";
import { TAction } from "../reducers/types";
import { DELETE_QUESTION, EDIT_QUESTION } from "../reducers/actions";
import { getSelectedTopic } from "./utils";

function createByYourSelfReducer(
  state: TCourse[] = initialState,
  action: TAction,
): TCourse[] {
  switch (action.type) {
    // case ADD_THEME: {
    //   const { course, topic, question, answer_1, answer_2, answer_3 } =
    //     action.payload;
    //   const quizData = structuredClone(state);

    //   const { selectedTopic, selectedThemes } = getSelectedTopic(
    //     quizData,
    //     course,
    //     topic,
    //   );

    //   const questionAndAnswers: TQuestion = {
    //     question,
    //     answer_1,
    //     answer_2,
    //     answer_3,
    //   };

    //   // Если тема с таким названием (topic) есть,находим массив вопросов этой темы и пушим.
    //   // Если нет, пушим новый объект с темами

    //   if (selectedTopic) {
    //     const arrayWithSelectedTopic = selectedTopic[topic];
    //     arrayWithSelectedTopic.push(questionAndAnswers);
    //   } else {
    //     selectedThemes.push({ [topic]: [questionAndAnswers] });
    //   }

    //   return quizData;
    // }
    case DELETE_QUESTION: {
      const { course, topic, questionIndex } = action.payload;

      if (!topic || questionIndex === undefined) return state;

      const quizData = structuredClone(state);

      const { selectedTopic } = getSelectedTopic(quizData, course, topic);
      if (!selectedTopic) return state;

      selectedTopic[topic] = selectedTopic[topic].filter(
        (_, idx) => idx !== questionIndex,
      );

      return quizData;
    }
    case EDIT_QUESTION: {
      const {
        course,
        topic,
        questionIndex,
        question,
        answer_1,
        answer_2,
        answer_3,
      } = action.payload;

      if (!topic || questionIndex === undefined) return state;

      const quizData = structuredClone(state);

      const { selectedTopic } = getSelectedTopic(quizData, course, topic);
      if (!selectedTopic) return state;

      const arrayWithSelectedQuestions = selectedTopic[topic];
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
