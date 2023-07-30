import { counterActionTypes } from "../constants/counter.constants";

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case counterActionTypes.INCREMENT:
    case counterActionTypes.TIMEOUT_INCREMENT:
      return state + 1;
    case counterActionTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
