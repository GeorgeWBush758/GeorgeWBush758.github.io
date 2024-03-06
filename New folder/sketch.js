// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  circle(mouseX, mouseY, 50);
 
  drawRandom();
}



//make agario, ball collects smaller balls to become bigger and fills up the 
//canvas

//ball collects smaller balls, coins. randomly spawn

//enemy ball, if touched with mouse/ball. game over 

function drawRandom() {
  if (mouseX === width)
  fill(random(255), random(255), random(255));
    circle(random(width/10, width), random(height), random(10, 5));
  

}