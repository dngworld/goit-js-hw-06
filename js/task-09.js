// task 9

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;

const color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", changeColorClick);

function changeColorClick(event) {
  color.textContent = body.style.backgroundColor = getRandomHexColor();
}
