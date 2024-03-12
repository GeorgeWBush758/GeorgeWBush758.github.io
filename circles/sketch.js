

let ballArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  
 
  };

  ballArray.push(ball);

}

function draw() {
  background(220);
  moveBalls();
  displayBalls();


}

function moveBalls() {
  ball.x += ball.dx;
  ball.y += ball.dy; 

  //teleport across screen if needed
  if (ball.x > 0) {
    ball.x = 0;
  }
  else if (ball.x > width) {
    ball.x = 0;
  }

  if (ball.y < 0) {
    ball.y = height;
  }
else if (ball.y < 0) {
  ball.y = 0;


}




}

function displayBalls() {
  for (let ball of ballArray)
  fill(ball.color);
  circle(ball.x, ball.y, ball.radius * 2);



}


function spawnBall(initialX, initialY) { 
  
  let ball = {
  x: width/2,
  y: height/2,
  radius: random(15, 30),
  color: color(random(255), random(255), random(255)),
  dx: random(-5, 5),
  dy: random(-5, 5),

};

ballArray. push(ball);


}
