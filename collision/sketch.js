// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

let hit = false;

function draw() {
  background(255);
  circle(200, 200, 100);
  circle(mouseX, mouseY, 150);

  hit = collideCircleCircle(mouseX, mouseY, 150, 200, 200, 100);

  // Use vectors as input:
  // const mouse  = createVector(mouseX, mouseY);
  // const circle = createVector(200, 200);
  // hit = collideCircleCircleVector(mouse, 150, circle, 100);

  if (hit) {
    stroke("red");
  }
  else {
    stroke("black");
  }


  print("colliding?", hit);
}





