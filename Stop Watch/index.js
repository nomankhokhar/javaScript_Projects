const clock = document.querySelector(".clock");

let second = 0, min = 0, hour = 0, Intid;

const startStopwatch = () => {

    Intid = setInterval(() => {

        if (second < 59) {
            second++;
        }
        else if(min >= 59)
        {
            hour++;
            min=0;
        }
        else {
            second = 0;
            min++;
        }
         const seconds = String(second).padStart(2,"0");
         const minutes = String(min).padStart(2,"0");
         const houRs = String(hour).padStart(2,"0");
        const time =(`${houRs}:${minutes}:${seconds}`);
         clock.innerHTML = time;
    }, 1000);
}


const stopStopwatch = () => {
    clearInterval(Intid);
}