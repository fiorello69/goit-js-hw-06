const input = document.querySelector("#controls input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
