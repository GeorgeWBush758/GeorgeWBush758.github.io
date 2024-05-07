

let points = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  let somePoint = new MovingPoint();
  POINTS.push(somePoint);
}

function draw() {
  background(220);
  for (let point of points) {
    point,update();
    point.display();

  }
}


function mousePressed() {
  let somePoint = new MovingPoint(mouseX, mouseY);
  points.push(somepoint);
}


class MovingPoint {
  constructor() {
    this.radius = 15;
    this.x = 0;
    this.y = 0;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.01;
    this.color = color(random(255),random(255),random(255) );
  }


  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius);

  }

  update() {
    let dx = noise(this.xTime);
    let dy = noise(this.yTime);

    //
    this.dx = map(dx, 0, 1, )
    



    this.x = noise(this.xTime) * width;
    this.y = noise(this.yTime) * height;


    //
    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;
  }
}