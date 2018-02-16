let a = 30
cursor(TEXT)

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(255);
}

function draw(){
  fill(random(255), random(255), random(255));
  if (mouseX < windowWidth/2){
    text('IM IN PAIN', random(0, width), random(0, height), random(50, 200));
  }
  if (mouseX > windowWidth/2){
    text('EXISTENCE IS TORMENT', random(0, width), random(0, height), random(50, 200));
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
