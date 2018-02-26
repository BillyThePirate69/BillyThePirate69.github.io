let a = 30;
let w = 650;
let x = 300;
let y = 120;
let z = 90;
let b = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(255);
}

function draw(){
  fill(random(255), random(255), random(255));
  if (mouseX < windowWidth/2){
    text('xd', random(0, width), random(0, height), random(50, 200));
  }
  if (mouseX > windowWidth/2){
    text('xD', random(0, width), random(0, height), random(50, 200));
  }
  fill(random(255), random(255), random(255));
  rect (w, x, y, z);

  if (b){
    background(255);
  }
}

function mouseDragged(){
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, (a, a));
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    a = (a + 5)
  }
  if (keyCode === DOWN_ARROW){
    a = (a - 5)
  }
  if (key == 'n' || key == 'N'){
    a = (30)
  }
  if (key == 'c' || key == 'C'){
    background(255)
  }
}

function deviceShaken(){
  background(255);
}

function mousePressed(){
  if(mouseX > x && mouseX < w+y && mouseY > x && mouseY < x+z){
    b = !b;
  }
}
