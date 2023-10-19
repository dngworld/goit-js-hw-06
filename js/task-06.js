const input = document.querySelector("#validation-input");
input.addEventListener("blur", handlerInput);

function handlerInput(event) {
  const inputValue = event.currentTarget.value.trim().length;
  if (inputValue === Number(input.dataset.length)) {
    updateInput("valid", "invalid");
  } else {
    updateInput("invalid", "valid");
  }
}
function updateInput(green, red) {
  input.classList.add(green);
  input.classList.remove(red);
}
