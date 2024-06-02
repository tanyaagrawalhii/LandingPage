


const navMenu = document.querySelector(".navMenu");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav li a");
navMenu.addEventListener("click", () => {
    if (!nav.classList.contains("show-nav")) {
        nav.classList.add("show-nav");
        navMenu.classList.add("active");
    } else {
        nav.classList.remove("show-nav");
        navMenu.classList.remove("active");
    }
})