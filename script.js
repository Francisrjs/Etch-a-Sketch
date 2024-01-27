const grid = document.querySelector(".container_grid");
let gridSize = 32;

// creo los cuadrados
function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    var gridSquare = document.createElement("div");

    // agrego los atributos y clases
    gridSquare.className = "grid_dynamic";
    gridSquare.innerHTML = " ";
    gridSquare.style.border = "1px solid black"; // Borde negro

    // Le agrego un evento esto cambia el CSS
    gridSquare.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "black";
      this.style.color = "white";
    });

    // Ajusto el estilo con la corrección en las comillas
    gridSquare.style.width = `calc(100% / ${gridSize})`;
    gridSquare.style.height = `calc(100% / ${gridSize})`;

    // Adjunto el cuadrado al contenedor correcto
    grid.appendChild(gridSquare);
  }
}
function removeGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}
createGrid();

function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = value;
  gridSize = value;
  removeGrid();
  createGrid();
}
