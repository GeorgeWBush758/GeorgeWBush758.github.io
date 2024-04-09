// make a game using an array 
//make a cookie clicker game where balss from the top and dissapear at the bottom


let theCookies=[drawCookie];
let state = "startScreen";

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background("white");
  
  drawRandomCookie();
  drawCookie();
  circle();
  showText();
  //moveBubblesRandomly();
  moveBubblesWithNoise();
  displayBubbles();

}


// make a start screen 

function showText() {
  fill("black");
  textSize(42);
  textAlign(CENTER, CENTER);
  text("cookie", width/2, height/2.30);
}





// draw a cookie code
function drawCookie() {
  fill(181, 101, 29);
  circle(width/2, height/2, 50);
  fill("black");
  circle(width/2, height/2.10, 5);
  circle(width/1.96, height/1.95, 5);
  circle(width/1.96, height/2.04, 5);
  //right side  
  circle(width/2, height/2, 5);  
  circle(width/2, height/1.91, 5);
  //left side  
  circle(width/2.04, height/2.04, 5);
  circle(width/2.04, height/1.95, 5);
}



function drawRandomCookie() {
  
}



let cookie = {
  x: random(width),
  y: 0,
  radius: 20,
};
theCookies.push(cookie);



let theBubbles = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < 5; i++) {
    spawnBubble();
  }
}

window.setInterval(spawnBubble, 500);

function mousePressed() {
  for (let i = theBubbles.length - 1; i >= 0; i--) {
    if (clickedInBubble(mouseX, mouseY, theBubbles[i])) {
      theBubbles.splice(i, 1);


    }
  }
}

function clickedInBubble(x, y, someBubble) {
  let distancesAway = dist(x, y, someBubble.x, someBubble.y);
  let radius = someBubble.size / 2;
  if (distancesAway < radius) {
    return true;
  }
  else {
    return false;
  }


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
    size: random(30, 50),
    x: random(width),
    y: random(height),
    speed: 3,
    r: random(255),
    g: random(255),
    b: random(255),
    alpha: random(255),
    timeX: random(1000000),
    timeY: random(1000000),
    deltaTime: 0.002,
  };
  theBubbles.push(someBubble);
}