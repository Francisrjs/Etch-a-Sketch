let gridSize = 20;
var optionPaint = "black";
// creo los cuadrados

function createGrid() {
  grid = document.querySelector(".container_grid");
  for (let i = 0; i < gridSize * gridSize; i++) {
    var gridSquare = document.createElement("div");

    // agrego los atributos y clases
    gridSquare.className = "grid_dynamic";
    gridSquare.innerHTML = " ";
    gridSquare.style.border = "1px solid black"; // Borde negro

    // Le agrego un evento esto cambia el CSS
    gridSquare.addEventListener("mouseenter", function () {
      switch (optionPaint) {
        case "black":
          this.style.backgroundColor = "black";
          this.style.color = "white";
          break;
        case "ramdomColor":
          this.style.backgroundColor = generateRandomColor();
          break;
        case "eraser":
          this.style.backgroundColor = "white";
          break;
      }
    });

    // Ajusto el estilo con la corrección en las comillas
    gridSquare.style.width = `calc(${100}%  / ${gridSize})`;
    gridSquare.style.height = `calc(${100}%  / ${gridSize})`;

    // Adjunto el cuadrado al contenedor correcto
    grid.appendChild(gridSquare);
  }
}
function removeGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}
document.getElementById("rangeValue").innerHTML = gridSize;
createGrid();

function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = value;
  gridSize = value;
  removeGrid();
  createGrid();
}
// Botones con funcionalidades
var allSquares = document.querySelectorAll(".grid_dynamic");
function generateRandomColor(value) {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  if (randomColor.length != 7) {
    randomColor = generateRandomColor();
  }
  return randomColor;
}

var buttonRamdom = document.getElementById("ramdom_color");
//Primero cuando hace click modifico la funcion de
//todos los botones ramdom
buttonRamdom.addEventListener("click", () => {
  if (optionPaint == "black") {
    optionPaint = "ramdomColor";
    for (items of allSquares) {
      items.addEventListener("mouseenter", function () {
        this.style.backgroundColor = generateRandomColor();
      });
      buttonRamdom.innerHTML = "black";
    }
  } else {
    optionPaint = "black";
    for (items of allSquares) {
      items.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "black";
      });
    }
    buttonRamdom.innerHTML = "ramdom Color";
  }
});
var buttonEraser = document.getElementById("eraser_color");
buttonEraser.addEventListener("click", () => {
  for (items of allSquares) {
    items.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "white";
    });
    console.log("ejecutado");
  }
});
