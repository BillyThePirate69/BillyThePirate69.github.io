let floor = 40;
let score = 0;
let scales = 20;
let snake

function preload(){
   xd = loadImage('images/alpha.jpg');
   playbutton = loadImage('images/sixfive.jpg');
}

function setup() {
  createCanvas(800, 800);
  frameRate(15);
}


function draw(){
  if(state === 0){
    menu();
  }
  if(state === 1){
      background(60);

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

  // text
  textSize(60);
  text("Tyler1 xD", width/2 - 100, height/2 - 200);



  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    if (mouseIsPressed) {
      state = 1;
      background(255);
    }
  }
  image(playbutton, leftSide, topSide, buttonWidth, buttonHeight);
  image(xd, windowWidth, windowHeight);
}

function drawGrid() {
  for (let x=0; x<cols; x++){
    for (let y=0; y<rows; y++){
      if (grid[x][y] === 0){
        fill(0);
      }
      else{
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function setupSnake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.tail = [];


}

function keyPressed(){
  if (keyCode === UP_ARROW){
    snake.face(0, -1);
  } else if (keyCode === DOWN_ARROW){
    snake.face(0, 1);
  } else if (keyCode === RIGHT_ARROW){
    snake.face(1, 0);
  } else if (keyCode === LEFT_ARROW){
    snake.face(-1, 0);
  }
}

function eat(){

}

function foodSpawn(){
  let columns = floor(width/scales);
  let rows = floor(width/scales);
  food = createVector(floor(random(columns)), floor(random(rows)));
  food.new(scales);
}

function mainSnake(){
  if(snake.eat(food)){
    foodSpawn();
  }

  fill(255, 0, 0);
  rect(food.x, food.y, scales, scales);
}
