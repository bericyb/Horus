const y = 400;
const x = 300;

let grid = [];

let myList = [8, 16, 32, 64, 128];

const container = document.querySelector(".frame");

alert("Your screen color depth is: " + screen.colorDepth);

for (let i = 0; i < x * y; i++) {
  let newBoy = document.createElement("div");
  newBoy.className = "cell";
  newBoy.style.background = "silver";
  container.appendChild(newBoy);
}

init();

function clearGrid() {
  let children = container.children;
  for (let i = 0; i < children.length; i++) {
    children[i].style.background = "silver";
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function init() {
  while (true) {
    const child = Math.floor(Math.random() * 300);
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // console.log(child);
    const color =
      "rgb(" + r.toString() + ", " + r.toString() + ", " + r.toString() + ")";
    container.children[child].style.background = color;
    await sleep(1);
  }
}
