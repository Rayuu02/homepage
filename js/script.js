{
    const welcome = () => {
       console.log("Witam wszystkich sportowych świrów!");
    };
 
    const onClickToggleTheme = () => {
         const themeName = document.querySelector(".themeName");
         const body = document.querySelector(".body");
 
         body.classList.toggle("dark");
 
         themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
     });
 
 
 
     const init = () => {
         const button = document.querySelector(".header__button");
 
         button.addEventListener("click", onClickToggleTheme);
 
         welcome();
     };
 
     init();
 }