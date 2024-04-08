// make a game using an array 
//make a cookie clicker game where balss from the top and dissapear at the bottom


let theCookies=[drawCookie];
let state = "startScreen";

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  
  drawRandomCookie();
  drawCookie();
  circle();
  showText();
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
  circle(width/1.94, height/1.95, 5);
  circle(width/1.94, height/2.04, 5);
  //right side  
  circle(width/2, height/2, 5);  
  circle(width/2, height/1.91, 5);
  //left side  
  circle(width/2.06, height/2.04, 5);
  circle(width/2.06, height/1.95, 5);
}



function drawRandomCookie() {
  
}



let cookie = {
  x: random(width),
  y: 0,
  radius: 20,
};
theCookies.push(cookie);