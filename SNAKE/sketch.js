// Bill Tran
// CSC 30
// Grid-based game assignment, Snake "T1 edition"

let score = 0;
let gridSize = 25;
let state = 0;
let snake;
let food;
let xd;
let playButton;
let preWorkout;
let dead;

function preload(){
   xd = loadImage('images/alpha.jpg');
   playButton = loadImage('images/sixfive.jpg');
   preWorkout = loadImage('images/preworkout.png');
   dead = loadImage('images/yok.jpg');

}

function setup() {
  createCanvas(900, 900);
  frameRate(12);
  snake = new Snake();
  foodSpawn();

}

// Spawns food randomly on grid
function foodSpawn(){
  let cols = floor(width/gridSize);
  let rows = floor(width/gridSize);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(gridSize);
}

function draw(){

  if(state === 0){
    menu();
  }
  if(state === 1){
    background(100, 50, 50);
    if (snake.eat(food)){
      foodSpawn();
    }
    snake.update();
    snake.createSnake();
    snake.gameOver();
    image(preWorkout, food.x, food.y, gridSize, gridSize);
  }
  if(state === 2){
    deathScreen();
  }
}

function menu(){
  // button
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  textSize(60);
  text("Alpha Snake Game", width/2 - 250, height/2 - 200);



  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    if (mouseIsPressed) {
      state = 1;
      background(255);
    }
  }
  image(playButton, leftSide, topSide, buttonWidth, buttonHeight);
  image(xd, windowWidth, windowHeight);
}

function deathScreen(){
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;





  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    if (mouseIsPressed) {
      state = 1;
    }
  }
  image(dead, 0, 0, windowWidth, windowHeight);
  textSize(40);
  text("ur dead lol", width/2 - 100, height/2 - 200);
}


// Moves snake via arrow keys
function keyPressed(){
  if (keyCode === UP_ARROW){
    snake.face(0, -1);
  }else if (keyCode === DOWN_ARROW){
    snake.face(0, 1);
  }else if (keyCode === LEFT_ARROW){
    snake.face(-1, 0);
  }else if (keyCode === RIGHT_ARROW){
    snake.face(1, 0);
  }
}
