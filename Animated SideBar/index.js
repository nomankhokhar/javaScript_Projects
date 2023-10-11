const arrow = document.getElementById("arrow");
const leftSidebar = document.querySelector(".left-sidebar");
const rightSidebar = document.querySelector(".right-sidebar");
const headerLogo = document.querySelector(".logo");
const SidebaeItems = document.querySelector(".left-items");

let sidebarOpen = true;

arrow.addEventListener("click", () => {
  if (sidebarOpen) {
    leftSidebar.style.width = "50px";
    rightSidebar.style.width = "100%";
    headerLogo.style.display = "none";
    SidebaeItems.style.display = "none";
  } else {
    leftSidebar.style.width = "15vw";
    rightSidebar.style.width = "80vw";
    headerLogo.style.display = "block";
    SidebaeItems.style.display = "block";
  }
  arrow.classList.toggle("active");
  sidebarOpen = !sidebarOpen;
});
