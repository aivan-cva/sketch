let brush = "#000000";
let sizeVal = 20;

let grid = [];

const sliderInput = document.getElementById("grid-size-input");
const sketchCanvas = document.getElementById("sketch");

sketchCanvas.addEventListener("mousedown", (event) => {
  if (event.type === "mousedown") {
    console.log(event.type);
  }
});

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
  console.log("random");
  grid.forEach((pixel) => {
    pixel.addEventListener("mouseover", (event) => {
      brush = randomColor();
      event.target.style = `background-color : ${brush}`;
    });
  });
});

const shaderBtn = document.getElementById("shader");
shaderBtn.addEventListener("click", () => {
  console.log("shader");

  grid.forEach((pixel) => {
    let shade = 100;
    pixel.addEventListener("mouseover", (event) => {
      shade -= 10;

      event.target.style = `background : hsl(0,0%,${shade}%)`;
    });
  });
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
  brush = "#000";
  createPixels(sizeVal);
});

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", (event) => {
  console.log("input");
  let color = event.target.value;

  grid.forEach((pixel) => {
    pixel.addEventListener("mouseover", (event) => {
      brush = color;
      event.target.style = `background-color : ${brush}`;
    });
  });
});

const createPixels = (size) => {
  sketchCanvas.innerHTML = "";
  sketchCanvas.style.gridTemplateColumns = `repeat(${size}, 1fr`;
  sketchCanvas.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  for (let index = 0; index < size * size; index++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseover", (event) => {
      event.target.style = `background-color : ${brush}`;
    });
    sketchCanvas.appendChild(pixel);
  }

  grid = sketchCanvas.childNodes;
};

createPixels(sizeVal);
