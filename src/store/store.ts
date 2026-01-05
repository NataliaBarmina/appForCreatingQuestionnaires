import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import addThemeReducer from "./reducers/newReducer";

const rootReducer = combineReducers({
  addTheme: addThemeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type TRootState = ReturnType<typeof rootReducer>;
export type TDispatch = typeof store.dispatch;
