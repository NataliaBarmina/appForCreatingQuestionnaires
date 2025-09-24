import { TCourse } from "../commonTypes";
import { initialState } from "../initialState";
import { TAction } from "../reducers/types";
import { ADD_THEME } from "./actions";
import { getThemes } from "./utils";

function createThemeReducer(state: TCourse[] = initialState, action: TAction) {
  switch (action.type) {
    case ADD_THEME: {
      const { course, topic } = action.payload;

      const quizData = structuredClone(state);

      const themes = getThemes(quizData, course);
      themes.push({ [topic]: [] });

      return quizData;
    }
    default:
      return state;
  }
}

export default createThemeReducer;
