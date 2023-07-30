import { counterActionTypes } from "../constants/counter.constants";

const { INCREMENT, DECREMENT, TIMEOUT_INCREMENT } = counterActionTypes;

export function init() {
  return { type: "INITIALIZED" };
}

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function timeout() {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({ type: counterActionTypes.TIMEOUT_INCREMENT });
    }, 2000);
  };
}
