import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { addThemeReducer } from "./theme/addThemeReducer";
import { questionsReducer } from "./questions/questionsReducer";

const rootReducer = combineReducers({
  addTheme: addThemeReducer,
  questions: questionsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
export type TDispatch = typeof store.dispatch;
