function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(300);
  circle(230, 320, 200);
  let c = color('white');
  let d=color('black');
//   let a=color('pink');
  
  {circle(223, 160, 150);
  fill(d);
  }
  
  {circle(195, 150, 26);
  circle(245, 150, 26);
  fill(c);}
  
  {circle(191, 151, 18);
  circle(241, 151, 18);
    fill(d);}
  
  {circle(222, 200, 23); 
  fill(c);}
  
  circle(226, 280, 18);
  circle(226, 320, 18);
  circle(226, 360, 18);
  
  
  rect(317, 270, 100, 3);
  rect(42, 270, 100, 3);
 
}

draw.center