import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { themeReducer } from "./themeReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
