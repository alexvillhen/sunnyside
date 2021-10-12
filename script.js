let menuButton = document.getElementById("menuButton");
let menu = document.getElementById("responsiveMenu");
let menuOn = false;

let rowTop = document.querySelector("#rowTop");
let rowMid = document.querySelector("#rowMid");
let rowBot = document.querySelector("#rowBot");


function toggleMenu() {
    if(menuOn == false){
        menu.style.top = "45px";
        rowMid.style.right = "-150px";
        rowTop.style.transform = "rotate(45deg)";
        rowTop.style.top = "11.5px";
        rowBot.style.transform = "rotate(-45deg)";
        rowBot.style.bottom = "11.5px";
        menuOn = true;

        
    } 
    else{
        menu.style.top = "-500px";
        rowMid.style.right = "0px";
        rowTop.style.transform = "rotate(0deg)";
        rowTop.style.top = "0px";
        rowBot.style.transform = "rotate(0deg)";
        rowBot.style.bottom = "0px";
        menuOn = false;
    }
}

menuButton.addEventListener("click", toggleMenu);
