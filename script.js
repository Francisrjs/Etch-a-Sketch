const grid = document.querySelector(".container_grid");
let gridSize = 100;

// creo los cuadrados
function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        var gridSquare = document.createElement("div");

        // agrego los atributos y clases
        gridSquare.className = "grid_dynamic";
        gridSquare.innerHTML = '-';

        // Le agrego un evento
        gridSquare.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "white";
        });

        // Ajusto el estilo con la corrección en las comillas
        gridSquare.style.width = `calc(100% / ${gridSize})`;
        gridSquare.style.height = `calc(100% / ${gridSize})`;

        // Adjunto el cuadrado al contenedor correcto
        grid.appendChild(gridSquare);
    }
}

createGrid();

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
    gridSize=value;
    createGrid();
}