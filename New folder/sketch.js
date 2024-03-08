// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x;
let y;
let dx = 2;
let dy = 2;
let mario;
let scalar = 1.0;





function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(mouseX, mouseY, 50);
  moveBall();
}

function moveBall() {
  if (keyIsDown(87)) { //w
    y -= dy;
  }
  if (keyIsDown(83)) { //s
    y += dy;
  }
  if (keyIsDown(68)) { //d
    x += dx;
  }
  if (keyIsDown(65)) { //a
    x -= dx;
  }
}


//make agario, ball collects smaller balls to become bigger and fills up the 
//canvas

//ball collects smaller balls, coins. randomly spawn

//enemy ball, if touched with mouse/ball. game over 

