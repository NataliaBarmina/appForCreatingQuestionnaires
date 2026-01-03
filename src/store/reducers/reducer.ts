import { TQuestion, TCourse } from "../commonTypes";
import { initialState } from "../initialState";
import { TAction } from "./types";
import { DELETE_QUESTION, EDIT_QUESTION, ADD_QUESTION } from "./actions";
import { ADD_THEME } from "./actions";
import { getThemes } from "./utils";
import { getQuestions } from "./utils";

function reducer(state: TCourse[] = initialState, action: TAction): TCourse[] {
  switch (action.type) {
    case ADD_THEME: {
      const { course, topic } = action.payload;

      const quizData = structuredClone(state);

      const selectedThemes = getThemes(quizData, course);
      selectedThemes.push({ [topic]: [] });

      return quizData;
    }
    case ADD_QUESTION: {
      const { course, topic, question, answer_1, answer_2, answer_3 } =
        action.payload;

      const quizData = structuredClone(state);

      const questions = getQuestions(quizData, course, topic);

      console.log(course, topic, questions); //todo

      const questionAndAnswers: TQuestion = {
        question,
        answer_1,
        answer_2,
        answer_3,
      };
      questions.push(questionAndAnswers);
      return quizData;
    }
    // case DELETE_QUESTION: {
    //   const { course, topic, questionIndex } = action.payload;

    //   if (!topic || questionIndex === undefined) return state;

    //   const quizData = structuredClone(state);

    //   const { selectedTopic } = getSelectedTopic(quizData, course, topic);
    //   if (!selectedTopic) return state;

    //   selectedTopic[topic] = selectedTopic[topic].filter(
    //     (_, idx) => idx !== questionIndex,
    //   );

    //   return quizData;
    // }
    // case EDIT_QUESTION: {
    //   const {
    //     course,
    //     topic,
    //     questionIndex,
    //     question,
    //     answer_1,
    //     answer_2,
    //     answer_3,
    //   } = action.payload;

    //   if (!topic || questionIndex === undefined) return state;

    //   const quizData = structuredClone(state);

    //   const { selectedTopic } = getSelectedTopic(quizData, course, topic);
    //   if (!selectedTopic) return state;

    //   const arrayWithSelectedQuestions = selectedTopic[topic];
    //   if (!arrayWithSelectedQuestions[questionIndex]) return state;

    //   arrayWithSelectedQuestions[questionIndex] = {
    //     question,
    //     answer_1,
    //     answer_2,
    //     answer_3,
    //   };

    //   return quizData;
    // }

    default:
      return state;
  }
}
export default reducer;
