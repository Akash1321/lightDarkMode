const tablet = document.querySelector(".tablet");
const sunIcon = document.querySelector(".bi-brightness-high");
const moonIcon = document.querySelector(".bi-moon");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const sunButton = document.querySelector("#sunButton");
const moonButton = document.querySelector("#moonButton");


function rotateSunIcon(){
sunIcon.classList.toggle("si");
}

function rotateMoonIcon(){
moonIcon.classList.toggle("mi");
}





function changeMode(){
    console.log("working");
    sun.classList.toggle("holders");
    moon.classList.toggle("holders");

    sunButton.classList.toggle("button");
    moonButton.classList.toggle("button");

    if(sunButton.classList.contains("button")){
        sunButton.style.backgroundColor = "#272627";
        tablet.style.background = "linear-gradient( 135deg, #9114FD, #3B08F2)";
        document.body.style.backgroundColor = `#272627`;
    } else{
        tablet.style.background = "linear-gradient( 135deg,#EC86EE, #5BD1FE)";
        document.body.style.backgroundColor = `#ffffff`;
    }
    
}

moonButton.addEventListener("mouseover", rotateSunIcon)
moonButton.addEventListener("mouseout", rotateSunIcon)
sunButton.addEventListener("mouseover", rotateMoonIcon)
sunButton.addEventListener("mouseout", rotateMoonIcon)

moonButton.addEventListener("click", changeMode)
sunButton.addEventListener("click", changeMode)