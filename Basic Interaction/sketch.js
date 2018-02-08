// P5JS tempate - Bill Tran
// Dan Schellenberg - modified by Bill Tran
// Feb 2, 2018 - modified on Feb 7th, 2018

// global variables
let gear;

// the preload function guarentees that the code inside the function is
// executed before the rest of the program runs -- helpful for things
// like loading images (since JS is asynchronous)
function preload() {
  gear = loadImage("images/tony.jpg");
}

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  image(0, 0);

  stroke(0);
  line(0, 0, 200, 200);

  fill(0, 255, 0, 100);
  noStroke();

  rect(mouseX, mouseY, 100, 300);
  ellipse(400, 150, 300, 200);
}

function keyPressed(){
  fill(random(255), random(255), random(255));
  ellipse(mouseX,mouseY,random(100),random(150));

}

function mouseClicked(){
  fill(random(255), random(255), random(255));
  rect(mouseX, mouseY, random(150), random(150));
}

function deviceShaken(){
  var s = 'NUUUUUUUT'
  fill(random(255), random(255), random(255));
  textSize(50);
  text(s, random(2000), random(2000));
}
