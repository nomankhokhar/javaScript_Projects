const textareaE1 = document.getElementById("textarea");
const totalCounterE1 = document.getElementById("total-counter");
const remaining = document.getElementById("remaining-counter");


textareaE1.addEventListener("keyup", ()=>{
    updateCounter();
    console.log("Press");
})

function updateCounter(){
    totalCounterE1.innerHTML =textareaE1.value.length;
    remaining.innerHTML = textareaE1.getAttribute("maxLength") - textareaE1.value.length;
}