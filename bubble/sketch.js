// bubble movement demo

let theBubbles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < 5; i++) {
    spawnBubble();
  }
}

window.setInterval(spawnBubble, 500);





function draw() {
  background("white");


  //moveBubblesRandomly();
  moveBubblesWithNoise();
  displayBubbles();
}

function moveBubblesWithNoise() {
  for (let bubble of theBubbles) {
    // figure out where to be
    let x = noise(bubble.timeX) * width;
    let y = noise(bubble.timeY) * height;

    //
    bubble.x = x;
    bubble.y = y;

    //
    bubble.timeX += bubble.deltaTime;
    bubble.timeY += bubble.deltaTime;



  }


}



function moveBubblesRandomly() {
  for (let bubble of theBubbles) {
    let choice = random(100);
    if ( choice < 25 ) {
    //move up
      bubble.y -= bubble.speed;
    }
    else if (choice < 50) {
      bubble.y += bubble.speed;
    }
    else if (choice < 75) {
      bubble.x -= bubble.speed;
    }
    else if (choice < 100) {
      bubble.x += bubble.speed;
    }


  }
}




function displayBubbles() {
  for (let bubble of  theBubbles) {
    fill(bubble.r, bubble.g, bubble.b, bubble.alpha);
    circle(bubble.x, bubble.y, bubble.size);
  }

}


function spawnBubble() {
  let someBubble = {
    size: random(10, 30),
    x: random(width),
    y: random(height),
    speed: 3,
    r: random(255),
    g: random(255),
    b: random(255),
    alpha: random(255),
    timeX: random(1000000),
    timeY: random(1000000),
    deltaTime: 0.01,
  };
  theBubbles.push(someBubble);


}