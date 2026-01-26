import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { addThemeReducer } from "./newReducer";

const rootReducer = combineReducers({
  addTheme: addThemeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
export type TDispatch = typeof store.dispatch;
