import { themeActionTypes, themeOptions } from "../constants/theme.constants";

export function themeReducer(state = { value: themeOptions.LIGHT }, action) {
  switch (action.type) {
    case themeActionTypes.CHANGED:
      return { ...state, value: action.payload };
    default:
      return state;
  }
}
