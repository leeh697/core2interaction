function updateTime() {

let today = new Date();


  let thisMonth = today.getMonth();
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let thisDate = today.getDate();
  console.log(thisDate);

  let thisWeekday = today.getDay();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let thisYear = today.getFullYear();
  console.log(thisYear);


  let dateElem = document.getElementById("dateHere");
  dateElem.innerHTML = months[thisMonth] + " " + thisDate + ", " + thisYear;

// --------------------------------------------------------------------------------------------------

  let thisHour = today.getHours();
  let thisMinute = today.getMinutes();
  let thisSecond = today.getSeconds();
    

  if(thisSecond < 10) {
    thisSecond = "0" + thisSecond;
  }
    
  if(thisMinute < 10) {
    thisMinute = "0" + thisMinute;
  }
    
  if(thisHour < 10) {
    thisHour = "0" + thisHour;
  }
    
  if(thisHour > 12) {
    thisHour = thisHour - 12;
  }

  let timeElem = document.getElementById("timeHere");
  timeElem.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond; 
}

setInterval(updateTime, 1000);

// --------------------------------------------------------------------------------------------------

function shapeChange() {
let element = document.getElementById("rectangle");
let today = new Date();
let currentSeconds = today.getSeconds();

let secondsToSize = map(currentSeconds, 0, 59, 0, 100);
let secondsToHue = map(currentSeconds, 0, 59, 0, 360);

element.style.height = secondsToSize + "vh";
element.style.backgroundColor = "hsl(" + secondsToHue + ", 40%, 80%)";
  
}

setInterval(shapeChange, 1000);



function map(value, low1, high1, low2, high2){
  
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}











