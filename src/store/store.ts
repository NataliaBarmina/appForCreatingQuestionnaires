import { combineReducers } from "redux";
import reducer from "./reducers/reducer";
import { configureStore } from "@reduxjs/toolkit";
import addThemeReducer from "./reducers/newReducer";

const rootReducer = combineReducers({
  // reducer: reducer,
  addTheme: addThemeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type TRootState = ReturnType<typeof rootReducer>;
export type TDispatch = typeof store.dispatch;
