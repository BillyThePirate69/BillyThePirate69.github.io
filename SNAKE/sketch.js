let score = 0;
let gridSize = 25;
let state = 0;
let snake;
let food;
let xd;
let playButton;
let preWorkout;

function preload(){
   xd = loadImage('images/alpha.jpg');
   playButton = loadImage('images/sixfive.jpg');
   preWorkout = loadImage('images/preworkout.png');

}

function setup() {
  createCanvas(800, 800);
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
  text("Alpha Snake Game", width/2 - 100, height/2 - 200);



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

  textSize(60);
  text("ur dead lol, click button to return to revive", width/2 - 100, height/2 - 200);



  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    if (mouseIsPressed) {
      state = 1;
      background(0);
    }
  }
  image(playButton, leftSide, topSide, buttonWidth, buttonHeight);
  image(xd, windowWidth, windowHeight);
}

class Snake{
  constructor(x, y){
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.score = 0;
  this.tail = [];
}

// Detection of food consumption
  eat(pos){
    let detect = dist(this.x, this.y, pos.x, pos.y);
    if(detect < 1){
      this.score++
      return true;
    }
    else{
      return false;
    }

  }

// Constant update on snake's movement/location
update(x, y){
    for (let i=0; i<this.tail.length-1; i++){
      this.tail[i] = this.tail[i+1];
    }

    if (this.score >= 1){
      this.tail[this.score - 1] = createVector(this.x, this.y);
    }


    this.x = this.x + this.xSpeed*gridSize;
    this.y = this.y + this.ySpeed*gridSize;
    this.x = constrain(this.x, 0, width-gridSize);
    this.y = constrain(this.y, 0, height-gridSize);
  }

// Draws snake
  createSnake(){
    fill(255);
    for (let i = 0; i < this.tail.length; i++) {
      image(xd, this.tail[i].x, this.tail[i].y, gridSize, gridSize);
    }
    image(xd, this.x, this.y, gridSize, gridSize);
  }

  face(x, y){
    this.xSpeed = x;
    this.ySpeed = y;
  }

// Death screen and detection for death
  gameOver(){
    for (let i=0; i<this.tail.length; i++){
      let pos = this.tail[i];
      let detect = dist(this.x, this.y, pos.x, pos.y);
      if (detect < 1){
        this.total = 0;
        this.tail = [];
        state = 2;
    }
  }
}

// Moves snake
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
