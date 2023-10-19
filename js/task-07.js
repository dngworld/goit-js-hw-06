const font = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
font.addEventListener("input", handlerInput);

function handlerInput(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
