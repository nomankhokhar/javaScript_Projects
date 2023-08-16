const daysElements = document.querySelector(".days");
const hoursElements = document.querySelector(".hours");
const mintuesElements = document.querySelector(".mintues");
const secondsElements = document.querySelector(".seconds");
const heading = document.querySelector("h1");

const secconds = 1000;
const mintues = secconds * 60;
const hours = mintues * 60;
const days = hours * 24;
const counterTimer = document.querySelector(".counterTimer");



const timerFunction=()=>{
   
    let now = new Date(),
    dd= String(now.getDate()).padStart(2,"0"),
    mm = String(now.getMonth()+1).padStart(2,"0"),
    yyyy=now.getFullYear();

const enteredDay = prompt("Enter Day").padStart(2,"0");
const enteredMonth = prompt("Enter Month").padStart(2,"0");





now = `${dd}/${mm}/${yyyy}`;

let userEnteredDate = `${enteredDay}/${enteredMonth}/${yyyy}`;

if(now > userEnteredDate){
        userEnteredDate = userEnteredDate = `${enteredDay}/${enteredMonth}/${yyyy+1}`;
}

 const id = setInterval(()=>{
        const timer = new Date(userEnteredDate).getTime();
        const today = new Date().getTime();
    
        const difference = timer-today;
        const leftDays = Math.floor(difference/days);
        const leftHours = Math.floor((difference%days) /hours);
        const leftMints = Math.floor((difference%hours) / mintues);
        const leftSec = Math.floor((difference%mintues) /secconds);
        
        daysElements.innerHTML = leftDays;
        hoursElements.innerHTML=leftHours;
        mintuesElements.innerHTML=leftMints;
        secondsElements.innerHTML=leftSec;
    
        // console.log(`${leftDays} ${leftHours} ${leftMints} ${leftSec}`)
    
        if (difference < 0) {
            counterTimer.style.display = "none";
            heading.innerHTML = "Time's Up!";
            clearInterval(id);
        }
    } , 0);    
}

timerFunction();