// task 4
let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

decrementBtn.addEventListener("click", clickDecrementBtn);
function clickDecrementBtn(event) {
  counterValue -= 1;
  value.textContent = counterValue;
}
incrementBtn.addEventListener("click", clickIncrementBtn);
function clickIncrementBtn(event) {
  counterValue += 1;
  value.textContent = counterValue;
}
