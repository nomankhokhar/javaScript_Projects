const names = document.getElementById("name");
const tagsContainer = document.querySelector(".tags");


const addName = () => {
    const tag = document.createElement("div");

    console.log(names.value);
    tag.setAttribute("class", "tag");
    tag.innerHTML = `This your generated text ${names.value}`;

    tagsContainer.append(tag);
};