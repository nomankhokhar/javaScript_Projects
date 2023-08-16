const zodiac = document.getElementById("zodiac");


const changeBakground = () => {
    const body = document.body;
    switch (zodiac.value) {
        case "white":
            body.style.backgroundColor = "white";
            break;
        case "aries":
            body.style.backgroundColor = "red";
            break;
        case "tarus":
            body.style.backgroundColor = "blue";
            break;
        case "gemini":
            body.style.backgroundColor = "green";
            break;
        case "cancer":
            body.style.backgroundColor = "lightblue";
            break;
        case "leo":
            body.style.backgroundColor = "pink";
            break;
        case "virgo":
            body.style.backgroundColor = "blue";
            break;
        case "libra":
            body.style.backgroundColor = "blue";
            break;
        case "scorpio":
            body.style.backgroundColor = "blue";
            break;
        case "leo":
            body.style.backgroundColor = "blue";
            break;
        case "leo":
            body.style.backgroundColor = "blue";
            break;
    }
}