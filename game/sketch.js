// make a game using an array 
//make a cookie clicker game where balss from the top and dissapear at the bottom


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  drawCircle();
  circle();

}



function drawCircle() {
  fill(181, 101, 29);
  circle(width/2, height/2, 50);
  circle(width/2, height/2, 20);
}
