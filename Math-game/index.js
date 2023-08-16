const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);


const questionE1 = document.getElementById("question");

const inputE1 = document.getElementById("input");

const formE1 = document.getElementById("form");

const scoreE1 = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

const msg = document.getElementById("msg");


if(!score) {
    score = 0;
}


let Msg = "";

scoreE1.innerHTML = `score : ${score}`;

questionE1.innerHTML = `What is ${num1} multiply by ${num2}`;

const correctAns = num1 * num2;


formE1.addEventListener("submit", ()=>{
    const userAns = Number(inputE1.value);

    // Number() || ya +inputE1.value;     both are Same

    if(userAns === correctAns) {
        score++;
        updateLocalStorage();
        Msg = "Correct";
    }
    else{
        score--;
        updateLocalStorage();
       Msg = "Wrong";
    }

    msg.innerHTML = Msg;
});



function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}