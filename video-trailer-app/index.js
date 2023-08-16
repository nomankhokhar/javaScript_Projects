const btnE1 = document.querySelector(".btn");
const videoTrailer = document.querySelector(".trailer-container");
const closeBtn = document.querySelector(".close-icon");
const video = document.querySelector('video');


btnE1.addEventListener("click", () => {
    videoTrailer.classList.remove("active");
})

closeBtn.addEventListener("click", () => {
    videoTrailer.classList.add("active");
    video.pause();
    video.currentTime = 0;
    
})
