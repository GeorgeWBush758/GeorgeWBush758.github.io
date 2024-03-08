// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = width/2;
let y = height/2;
let dx = 2;
let dy = 2;






function setup() {
  createCanvas(400, 400);

x = width/2;
y = height/2;

}





function draw() {
  background(220);
  circle(width/2, height/2, 50);
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



