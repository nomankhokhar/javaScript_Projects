const containerE1 = document.querySelector(".container");


for (let i = 0; i < 30; i++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    containerE1.appendChild(colorContainer);
}

const colorContainerE1s = document.querySelectorAll(".color-container");

function generateColors () {
    colorContainerE1s.forEach((colorContainer) => {
        const newColorCode = randomColor();
        colorContainer.style.backgroundColor = "#" + newColorCode;
        colorContainer.innerHTML = "#" + newColorCode;
    })
}

generateColors();

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.random() * chars.length;
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}

