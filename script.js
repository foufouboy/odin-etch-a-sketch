
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
    let modeState = "";
    const colorChosen = document.querySelector("input[type='color']")
    const modeButtons = document.querySelectorAll(".mode");
    
    const clearButton = document.querySelector(".clear");
    const eraserButton = document.querySelector(".eraser-button");
    const colorButton = document.querySelector(".color-button");
    const rainbowButton = document.querySelector(".rainbow-button");

    createGrid(16);
    let gridItems = document.querySelectorAll(".draw-panel div");

    gridDimensions.addEventListener("change", (e) => {
        createGrid(+e.target.value);
        gridItems = document.querySelectorAll(".draw-panel div");
        dimensionsText.textContent = `${e.target.value} x ${e.target.value}`

        for (let square of gridItems) {
            square.addEventListener("mouseover", (e) => {
                console.log(square);
                switch (modeState) {
                    case "eraser":
                        square.style.background = "white";
                        break;
                    
                    case "color":
                        square.style.background = colorChosen.value;
                        break;

                    case "rainbow": 
                        square.style.background = `rgb(${Math.floor(Math.random() * 255)},
                                                      ${Math.floor(Math.random() * 255)},
                                                      ${Math.floor(Math.random() * 255)})`;
                }            
            })
        }
    });

    clearButton.addEventListener("click", (e) => {
        for (let square of gridItems) {
            square.style.background = "white";
        }
    })

    eraserButton.addEventListener("click", (e) => {
        modeState = "eraser";
        for (let button of modeButtons) {
            button.style.background = "RGB(164, 255, 175)"
            button.style.color = "#0F0E14";
        }

        e.target.style.color = "rgb(255, 255, 255, .7)";
        e.target.style.background = "#0F0E14";
    }) 

    colorButton.addEventListener("click", (e) => {
        modeState = "color";
        for (let button of modeButtons) {
            button.style.background = "RGB(164, 255, 175)"
            button.style.color = "#0F0E14";
        }

        e.target.style.color = "rgb(255, 255, 255, .7)";
        e.target.style.background = "#0F0E14";
    }) 

    rainbowButton.addEventListener("click", (e) => {
        modeState = "rainbow";
        for (let button of modeButtons) {
            button.style.background = "RGB(164, 255, 175)"
            button.style.color = "#0F0E14";
        }

        e.target.style.color = "rgb(255, 255, 255, .7)";
        e.target.style.background = "#0F0E14";
    }) 

    colorChosen.addEventListener("input", (e) => {
        colorChosen.style.background = colorChosen.value;
    });

    for (let square of gridItems) {
        square.addEventListener("mouseover", (e) => {
            console.log(square);
            switch (modeState) {
                case "eraser":
                    square.style.background = "white";
                    break;
                
                case "color":
                    square.style.background = colorChosen.value;
                    break;

                case "rainbow": 
                    square.style.background = `rgb(${Math.floor(Math.random() * 255)},
                                                  ${Math.floor(Math.random() * 255)},
                                                  ${Math.floor(Math.random() * 255)})`;
            }            
        })
    }
}

init();
