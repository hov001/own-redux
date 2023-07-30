import { counterActionTypes } from "./constants/counter.constants";
import { themeActionTypes, themeOptions } from "./constants/theme.constants";
import { render } from "./core/render";
import { decrement, increment, init, timeout } from "./own-redux/actions";
import { rootReducer } from "./reducers/rootReducer";
import "./styles.css";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

const body = document.querySelector("body");
const counterSpan = document.getElementById("counter");

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const timeoutBtn = document.getElementById("timeout");

const themeBtn = document.getElementById("theme");

const { getState, dispatch, subscribe } = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )
);

incrementBtn.addEventListener("click", () => {
  dispatch(increment());
});
decrementBtn.addEventListener("click", () => {
  dispatch(decrement());
});
timeoutBtn.addEventListener("click", () => {
  dispatch(timeout());
});

themeBtn.addEventListener("click", () => {
  const payload = body.classList.contains(themeOptions.DARK)
    ? themeOptions.LIGHT
    : themeOptions.DARK;

  dispatch({ type: themeActionTypes.CHANGED, payload });
});

subscribe(() => {
  render(counterSpan, getState().counter);
});

subscribe(() => {
  body.classList.value = getState().theme.value;
});

dispatch(init());
