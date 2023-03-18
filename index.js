const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
    navbar.classList.toggle("show-navbar");
})