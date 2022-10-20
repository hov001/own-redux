import createStore from "./own-redux/createStore.js";
import { rootReducer } from "./own-redux/reducer.js";

import { lightTheme, darkTheme } from "./constants/theme.constants.js";

const root = document.getElementById("root");

const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");

const counter = document.getElementById("counter");

const changeThemeBtn = document.getElementById("change-theme-btn");

const lightParagraphs = document.getElementsByClassName("light-paragraph");

let store = createStore(rootReducer, { value: 0, theme: lightTheme });

const storeSelector = (store) => store.getState();

function render() {
  console.log("render::", storeSelector(store));
  counter.innerText = storeSelector(store).value;
}

function themeRender({ bgClass, contentClass }) {
  console.log("theme", bgClass, contentClass);

  root.classList = `bg-${bgClass}`;

  [...lightParagraphs].forEach((paragraph) => {
    paragraph.classList.remove(`text-${bgClass}`);

    paragraph.classList.add(`text-${contentClass}`);
  });
}

store.subscribe(render);

store.subscribe(() => {
  themeRender(storeSelector(store).theme);
});

incrementBtn.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

decrementBtn.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});

changeThemeBtn.addEventListener("click", () => {
  const currentTheme = root.classList.contains("bg-dark")
    ? lightTheme
    : darkTheme;

  store.dispatch({ type: "THEME_CHANGE", payload: { theme: currentTheme } });
});

render();
