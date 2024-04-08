let mainShape = document.getElementById("main");
let textInput = document.getElementById("my-text");
let sliderInput = document.getElementById("my-range");


function changeText() {
  mainShape.innerHTML = "Turn me into" + " a " + textInput.value + "."; 
}

function changeSize() {
  mainShape.style.borderRadius = sliderInput.value + "px";
}