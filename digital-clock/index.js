const hourE1 = document.getElementById("hour");
const mintuesE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");


function updateclock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    
    if(h > 12)
    {
        h = h - 12;
        ampm= "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourE1.innerHTML = h;
    mintuesE1.innerHTML = m;
    secondE1.innerHTML = s;
    ampmE1.innerHTML = ampm;

    
    setTimeout(()=>{
      updateclock();
    },0);
}


updateclock();