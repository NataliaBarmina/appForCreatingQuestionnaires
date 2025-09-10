import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import createByYourSelfReducer from "./reducers/createByYourSelfReducer";

const rootReducer = combineReducers({
  createByYourSelf: createByYourSelfReducer,
});

const store = legacy_createStore(rootReducer);

export default store;

export type TRootState = ReturnType<typeof rootReducer>;
export type TDispatch = typeof store.dispatch;

// import { configureStore } from "@reduxjs/toolkit"; //todo пока не удалять, возможно пригодится в будущем
// const store = configureStore({
//   reducer: {
//     test: (state = {}) => state,
//   },
// });
// export default store;
