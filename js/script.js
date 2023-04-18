{
    const welcome = () => {
    console.log("Witam wszystkich sportowych świrów!");
}

const button.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});



const init = () => {
let przycisk = document.querySelector(".przycisk");
let button = document.querySelector(".header__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName")
let header = document.querySelector(".header");

welcome();
};

init();
}