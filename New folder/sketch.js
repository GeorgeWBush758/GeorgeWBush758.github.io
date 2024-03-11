// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x;
let y;
let dx = 3;
let dy = 3;

function setup() {
  createCanvas(windowWidth,windowHeight);

  x = width/2;
  y = height/2;

}

function draw() {
  background(220);
  moveBall();
  circle(x, y, 50);
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








