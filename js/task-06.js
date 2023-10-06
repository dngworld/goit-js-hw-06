// task 6
const input = document.querySelector("#validation-input");
input.addEventListener("blur", handlerInput);

function handlerInput(event) {
  const inputValue = event.currentTarget.value;
  if (inputValue.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
