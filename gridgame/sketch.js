let grid;
let cellSize;
const GRID_SIZE = 11;
const PLAYER = 9;
const BOMB = 8;
const OPEN_TILE = 0;
const IMPASSIBLE = 1;
let player = {
  x: 0,
  y: 0,
};
let grassImg;
let pavingImg;
let backgroundMusic;
let cantWalkSound;
let state = "start screen";

let stoneImg;
let bombImg;
let brickImg;
let boxImg;
let floorImg;
let crateImg;
let playerImg;


// function displayBomb() {
//   bombImg = loadImage("bomb.png");

// }



function preload() {
  grassImg = loadImage("grass1.png");
  pavingImg = loadImage("paving 4.png");
  backgroundMusic = loadSound("TownTheme.mp3");
  cantWalkSound = loadSound("magic1.wav");
  stoneImg = loadImage("white_pebble.png");
  bombImg = loadImage("bomb.png");
  brickImg = loadImage("brickwall.png");
  boxImg = loadImage("box.png");
  floorImg = loadImage("floor.png");
  crateImg = loadImage("crate.png");
  playerImg = loadImage("player.png");

} 


function setup() {
  //make the canvas the largest square that you can...
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }

  //if randomizing the grid, do this:
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  
  //this is dumb -- should check if this is the right size!
  cellSize = height/grid.length;

  //add player to the grid
  // grid[player.y][player.x] = PLAYER;

  //equalize my sounds
  backgroundMusic.setVolume(0.4);
  cantWalkSound.setVolume(1.0);
}

function windowResized() {
  //make the canvas the largest square that you can...
  if (windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowWidth);
  }
  else {
    resizeCanvas(windowHeight, windowHeight);
  }

  cellSize = height/grid.length;
}

function draw() {
  if (state === "start screen") {
    background("black");
    fill("white");
    stroke("white");
    textSize(30);
    textAlign(CENTER, CENTER);
    text("press space bar to start game", width/2, height/2);
    text("press WASD to move", width/2, height/1.70);
    text("press B to drop a bomb", width/2, height/1.50);
    text("welcome to my bomb game", width/2, height/2.80);
  }
  else if (state === "game") {
    background(220);
    displayGrid();
    displayPlayer();
  }
  else if (state === "game over") {
    background("black");
    fill("white");
    stroke("white");
    textSize("30");
    textAlign(CENTER, CENTER);
    text("you won yay", width/2, height/2);

  }


}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }

  if (key === "e") {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }

  if (key === "w") {   //up
    movePlayer(player.x + 0, player.y - 1); //0 on x axis, -1 on y axis
  }

  if (key === "s") {   //down
    movePlayer(player.x + 0, player.y + 1); //0 on x axis, 1 on y axis
  }

  if (key === "d") {   //right
    movePlayer(player.x + 1, player.y + 0); //1 on x axis, 0 on y axis
  }

  if (key === "a") {   //left
    movePlayer(player.x - 1, player.y + 0); //-1 on x axis, 0 on y axis
  }

  if (key === " " && state === "start screen") {
    state = "game";
    backgroundMusic.loop();
  }

  // incorperate a millie seconds function to bomb to make it dissapear after 3-5 seconds (turn back to grass block)
  if (key === "b") {
    grid[player.y][player.x] = BOMB;
  }

  if (key === "p") {
    state = "game over";
  }


}




function movePlayer(x, y) {
  //don't move off the grid, and only move into open tiles
  if (x < GRID_SIZE && y < GRID_SIZE &&
      x >= 0 && y >= 0 && grid[y][x] === OPEN_TILE) {
    //previous player location
    // let oldX = player.x;
    // let oldY = player.y;

    //move the player
    player.x = x;
    player.y = y;

    //reset old location to be an empty tile
    // grid[oldY][oldX] = OPEN_TILE;

    //move the player to the new spot
    // grid[player.y][player.x] = PLAYER;
  }
  else {
    cantWalkSound.play();
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  //toggle self
  toggleCell(x, y);
}

function toggleCell(x, y) {
  // make sure the cell you're toggling is in the grid...
  if (x < GRID_SIZE && y < GRID_SIZE &&
      x >= 0 && y >= 0) {
    //toggle the color of the cell
    if (grid[y][x] === OPEN_TILE) {
      grid[y][x] = IMPASSIBLE;
    }
    else if (grid[y][x] === IMPASSIBLE) {
      grid[y][x] = OPEN_TILE;
    }
  }
}

function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === IMPASSIBLE) {
        // fill("black");
        image(crateImg, x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === OPEN_TILE) {
        // fill("white");
        image(grassImg, x * cellSize, y * cellSize, cellSize);
      }
      else if (grid[y][x] === BOMB) {
      //   fill("red");
        image(bombImg, x * cellSize, y * cellSize, cellSize);
         
      }
    }
  }
}

function displayPlayer() {
  fill("red");
  square(player.x * cellSize, player.y * cellSize, cellSize);
  //square(player.x * cellSize, player.y * cellSize, cellSize);

}

function generateRandomGrid(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      //half the time, be a 1. Other half, be a 0.
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function generateEmptyGrid(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}