import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { questionsReducer } from "./questions/questionsReducer";

const rootReducer = combineReducers({
  questions: questionsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
export type TDispatch = typeof store.dispatch;
