// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  push();
  translate(300, 300); // translate moves the origin... the (0,0) or (x, y) starting point
  rotate(mouseX);
  square(0, 0, 200);
  pop();

  rect(600, 100, 100, 100);



}
