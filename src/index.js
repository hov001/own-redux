import { render } from "./core/render";
import "./styles.css";

const counterSpan = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const timeoutBtn = document.getElementById("timeout");

let counter = 0;

render(counterSpan, counter);

incrementBtn.addEventListener("click", () => {
  counter += 1;
  render(counterSpan, counter);
});
decrementBtn.addEventListener("click", () => {
  counter -= 1;
  render(counterSpan, counter);
});
timeoutBtn.addEventListener("click", () => {
  setTimeout(() => {
    counter += 1;
    render(counterSpan, counter);
  }, 2000);
});
