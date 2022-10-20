function createSquare(side) {
    console.log(side)
    const square = document.createElement("div");
    square.style.width = side + "px";
    square.style.height = side + "px";

    return square;
}

function createGrid(side) {
    const surfaceSide = 500;
    const squareSide = surfaceSide / side;

    const grid = document.querySelector(".draw-panel");

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

    for (let i = 0; i < side ** 2; i++) {
        grid.append(createSquare(squareSide))
    }
}

function init() {

    const gridDimensions = document.querySelector("input[type='range']");
    const dimensionsText = document.querySelector(".grid-dimensions");

    createGrid(16);

    gridDimensions.addEventListener("change", (e) => {
        createGrid(+e.target.value);
        dimensionsText.textContent = `${e.target.value} x ${e.target.value}`
    });
}

init();
