let timer;
let starto, stop;
let xd;
let x;
let y;
let state;
let menuButton;



function preload(){
   xd = loadImage('images/alpha.jpg');
   playbutton = loadImage('images/sixfive.jpg');
}

function setup() {
  createCanvas(1000, 1000);
  x = 0
  y = 0
  state = 0
}


function draw(){
  background(255);

  if(state === 0){
    let menuButton = 1;
    menu();
  }
  if(state === 1){
    let menuButton = 0;
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

  // tyler1 menu text
  textSize(60);
  text("Tyler1 xD", width/2 - 100, height/2 - 200);
  image(playbutton, leftSide, topSide, buttonWidth, buttonHeight);


  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    image(playbutton, leftSide, topSide, buttonWidth + 50, buttonHeight + 50);
    fill(255);
    if (mouseIsPressed) {
      state = 1;
      background(255);
    }
  }

  image(xd, windowWidth, windowHeight);
}

function tyler(){
  image(xd, random(995), random(995), 60, 60);
}
