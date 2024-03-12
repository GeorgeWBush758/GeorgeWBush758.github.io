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
let radius = 30;


function setup() {
  createCanvas(windowWidth,windowHeight);

  x = width/2;
  y = height/2;

}

function draw() {
  background(220);
  moveBall();
  circle(x, y, 50);

  drawCircle();
  moveCircle();
  bounceOffWall();
  randomBall();

}

function randomBall() {
  circle(random(width), random(height), 30);



}


// this should be for ball number 1

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




//MAKE THIS CODE ANOTHER BALL, SEPERATE BALL, this should be for ball number 2

function drawCircle() {
  circle(x, y, radius * 2);
}

function moveCircle() {
  x += dx;
  y += dy;
}


function bounceOffWall() {
  if (x + radius >= width || x - radius <= 0) {
    dx = -1 * dx;
   
  }
  if (y + radius >= height || y - radius <= 0) {
    dy = -1 * dy;
  }
}



