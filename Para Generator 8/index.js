const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");



const generateWord = (n) => {
    let text = "";
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < n; i++) {
        const random = (Math.random() * 25).toFixed(0);
        text += letter[random];
    }

    return text;
}


let numOfWords;

const generatePara = () => {

    const numOfWords = Number(input.value);

    const para = document.createElement("p");
    let data = "";
    for (let i = 1; i <= numOfWords; i++) {
        const randomNumber = (Math.random() * 15).toFixed(0);
        data += generateWord(randomNumber);
        data += " ";
    }
    para.innerHTML = data;
    para.setAttribute("class", "paras");

    container.append(para);
}