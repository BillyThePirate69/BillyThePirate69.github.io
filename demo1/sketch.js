function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(255);
}


function draw(){
  if (mouseX < windowWidth/2){
    fill (random(0, 255));
    rect (random(0, width), random(0, height), random(50,200), random(50,200));
  }
  if (mouseX > windowWidth/2){
    fill (random(255), random(255), random(255));
    ellipse (random(0, width), random(0, height), random(50,200));
  }
}

function keyPressed(){
  if (key == 'c' || key == 'C'){
    background(255);
  }
}



