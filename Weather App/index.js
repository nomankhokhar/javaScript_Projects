const tempperateField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");



const fetchData = async (target) => {


    const URL = `http://api.weatherapi.com/v1/current.json?key=aba441f7df4a422bbf5114424220808&q=${target}`;

    // fetch(URL).then(function(data) {
    //     console.log(data);
    // }).catch(function(e) {
    //     console.log("Nodata "+ e);
    // });


    let responce = await fetch(URL);
    let data = await responce.json();

    console.log(data);

    const {
        current: {
            temp_c, condition: {
                text, icon
            },
        },
        location: { name, localtime }
    } = data;


    updateDom(temp_c, name, localtime, icon, text);

}


fetchData("London");
function updateDom(tem, city, time, icon, text) {
   
    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];
    const exactDay = new Date(exactDate).getDate();
   
    tempperateField.innerHTML = tem;
    cityField.innerHTML = city;
    emojiField.src = icon;
    weatherField.innerHTML = text;
    dateField.innerHTML = `${exactTime} ${exactDay} ${exactDate}`;


}

const search = (e) => {
    e.preventDefault();
    target = searchField.value;
    fetchData(target);
}

form.addEventListener("click", search)

