let timer;
let starto, stop;
let xd;
let x;
let y;
let state;

function preload(){
   xd = loadImage('images/alpha.jpg');
   playbutton = loadImage('images/sixfive.jpg');
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

function tyler(){
  image(xd, 5, 5, 60, 60)
}
