let firstArray=["keep","love","accept","join","name","paint","protect","enjoy","compare","greet"];
console.log(firstArray)

document.getElementById("span1")
let mySpan1="span1"
console.log(mySpan1)

let randomSpan1=Math.floor(Math.random()*firstArray.length);
document.getElementById("span1").innerHTML=firstArray[randomSpan1]



let secondArray=["countries","room","world","planet","ocean","moon","park","mountain","playground","hallway"];
console.log(secondArray)

document.getElementById("span2")
let mySpan2="span2"
console.log(mySpan2)

let randomSpan2=Math.floor(Math.random()*secondArray.length);
document.getElementById("span2").innerHTML=secondArray[randomSpan2]


// let thirdArray=["surprised","happy","sad","excited","bored","anxious","disappointed","glad","confused","lucky"];

// document.getElementById("span3")
// let mySpan1="span3"

// let randomSpan3=Math.floor(Math.random()*thirdArray.length);
// document.getElementById("span3").innerHTML=thirdArray[randomSpan3]
