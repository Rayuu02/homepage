
console.log("Witam wszystkich sportowych świrów!");

let przycisk = document.querySelector(".przycisk");
let button = document.querySelector(".header__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName")
let header = document.querySelector(".header");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});

