const container = document.querySelector(".container");
let gridSize = 16; // default grid size

function gridCreator(gridSize) {
    for (let i = 0; i < gridSize*gridSize; i++) {
        let div = document.createElement("div");
        div.classList.add("box");
        container.appendChild(div);
    }

    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.width = `${760/gridSize}px`;
        box.style.height = `${680/gridSize}px`;
        box.addEventListener("mouseover", () => {
            box.classList.add("colour-change");
        })
    });

    const rgbButton = document.querySelector(".rgb-colors");

    rgbButton.addEventListener("click", () => boxes.forEach(box => {
        box.style.width = `${760/gridSize}px`;
        box.style.height = `${680/gridSize}px`;
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = `rgb(${rgbColorGen()}, ${rgbColorGen()}, ${rgbColorGen()})`;
        })
    }))

}
gridCreator(gridSize);

const gridSizeButton = document.querySelector(".grid-size-button");
gridSizeButton.addEventListener("click", () => {
    let newGridSize = parseInt(prompt("Enter a grid size? (for one side)", "16"));
    if (newGridSize > 100) {
        alert("Number should be smaller than 100");
    }
    if (newGridSize < 100) {
        container.innerHTML = ""; // clear out existing grid
        gridCreator(newGridSize);
    }
});


function rgbColorGen() {
    return Math.floor(Math.random() * 255);
}



