// // #1: TARGET HTML ELEMENTS
let myElement1 = document.getElementById("canvas");
let myElement2 = document.getElementById("square");
let myElement3 = document.getElementById("circle");

// // #2: ARRAY OF COLORS
let backgroundColors = ["#27963A", "#5F33A7", "#F17304", "#DC3403", "FAEF16", "0338A5"];


// // #3: RANDOM COLOR
let randomBackgroundColor1 = Math.floor(Math.random() * backgroundColors.length);
let randomBackgroundColor2 = Math.floor(Math.random() * backgroundColors.length);
let randomBackgroundColor3 = Math.floor(Math.random() * backgroundColors.length);

myElement1.style.backgroundColor = backgroundColors[randomBackgroundColor1];
myElement2.style.backgroundColor = backgroundColors[randomBackgroundColor2];
myElement3.style.backgroundColor = backgroundColors[randomBackgroundColor3];


// // #1: TARGET HTML ELEMENTS
let myElement4 = document.getElementById("canvas2");
let myElement5 = document.getElementById("square2");
let myElement6 = document.getElementById("circle2");


// // #3: RANDOM COLOR
let randomBackgroundColor4 = Math.floor(Math.random() * backgroundColors.length);
let randomBackgroundColor5 = Math.floor(Math.random() * backgroundColors.length);
let randomBackgroundColor6 = Math.floor(Math.random() * backgroundColors.length);

myElement4.style.backgroundColor = backgroundColors[randomBackgroundColor4];
myElement5.style.backgroundColor = backgroundColors[randomBackgroundColor5];
myElement6.style.backgroundColor = backgroundColors[randomBackgroundColor6];
