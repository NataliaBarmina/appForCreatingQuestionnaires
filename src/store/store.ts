import { combineReducers } from "redux";
import createByYourSelfReducer from "./reducers/createByYourSelfReducer";
import { configureStore } from "@reduxjs/toolkit";
import createThemeReducer from "./reducers/createThemeReducer";

const rootReducer = combineReducers({
  createByYourSelf: createByYourSelfReducer,
  createTheme: createThemeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type TRootState = ReturnType<typeof rootReducer>;
export type TDispatch = typeof store.dispatch;
