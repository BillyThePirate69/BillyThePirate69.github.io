let timer;
let starto, stop;
let xd;
let x;
let y;
let state;

function preload(){
   xd = loadImage('images/alpha.jpg');
   playbutton = loadImage('images/yikers.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0
  y = 0
  state = 0
}


function draw(){
  if(state === 0){
    menu();
  }
  if(state === 1){
    tyler()
  }
}

function menu(){
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
  image(playbutton, leftSide, topSide, buttonWidth, buttonHeight);
  image(xd, windowWidth, windowHeight);
}

function tyler(){
  rect(5, 5, 5, 5);
}
