// const button = document.querySelector(".button");
const sunIcon = document.querySelector(".bi-brightness-high");
const moonIcon = document.querySelector(".bi-moon");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const sunButton = document.querySelector("#sunButton");
const moonButton = document.querySelector("#moonButton");


function rotateSunIcon(){
sunIcon.classList.toggle("si");
// console.log(button);
}

function rotateMoonIcon(){
moonIcon.classList.toggle("mi");
}





function changeMode(e){
    console.log("working");
    sun.classList.toggle("holders");
    moon.classList.toggle("holders");

    sunButton.classList.toggle("button");
    moonButton.classList.toggle("button");

    console.log(e);
    
}

moonButton.addEventListener("mouseover", rotateSunIcon)
moonButton.addEventListener("mouseout", rotateSunIcon)
sunButton.addEventListener("mouseover", rotateMoonIcon)
sunButton.addEventListener("mouseout", rotateMoonIcon)

moonButton.addEventListener("click", changeMode)
sunButton.addEventListener("click", changeMode)