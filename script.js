let menuButton = document.getElementById("menuButton");
let menu = document.getElementById("responsiveMenu");
let menuOn = false;

let rowTop = document.querySelector("#rowTop");
let rowMid = document.querySelector("#rowMid");
let rowBot = document.querySelector("#rowBot");

function toggleMenu() {
    if(menuOn == false){
        menu.style.top = "45px";
        menuOn = true;
    } 
    else{
        menu.style.top = "-500px";
        menuOn = false;
    }
}

function buttonAnimation(){

}

menuButton.addEventListener("click", toggleMenu);