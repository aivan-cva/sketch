let brush = "#000000";
let sizeVal = 20;
const sliderInput = document.getElementById("grid-size-input");

sliderInput.addEventListener("change", (event) => {
  sizeVal = event.target.value;
  createPixels(sizeVal);
});

const randomColor = () => {
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let randomHex = "#";

  for (let index = 0; index < 6; index++) {
    const rand = hexArr[Math.floor(Math.random() * hexArr.length)];
    randomHex += rand;
  }
  return randomHex;
};

const randomBtn = document.getElementById("random-color");
randomBtn.addEventListener("click", () => {
  brush = randomColor();
  createPixels(sizeVal);
  console.log("randm color", brush);
});

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", (event) => {
  brush = event.target.value;
});

const createPixels = (size) => {
  const sketchCanvas = document.getElementById("sketch");
  sketchCanvas.innerHTML = "";
  sketchCanvas.style.gridTemplateColumns = `repeat(${size}, 1fr`;
  sketchCanvas.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  for (let index = 0; index < size * size; index++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("click", (event) => {
      event.target.style = `background-color : ${brush}`;
    });
    sketchCanvas.appendChild(pixel);
  }
};

createPixels(sizeVal);
