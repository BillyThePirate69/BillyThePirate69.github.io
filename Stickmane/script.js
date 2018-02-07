//Global var
let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(255);

  drawStickman(mouseX, mouseY);
  drawStickman(x, y);
}

function keyPressed() {
  if (key == 'w' || key == 'W') {
    y = y - 25;
  }
  if (key == 's' || key == 'S') {
    y = y + 25;
  }
  if (key == 'd' || key == 'D') {
    x = x + 25;
  }
  if (key == 'a' || key == 'A') {
    x = x - 25;
  }

}

function drawStickman(x, y) {
  //body
  line(x, y, x, y+200);

  // head
  fill(0, 255, 0);
  ellipse(x, y, 100, 100);

  // hat
  fill(0, 0, 0);
  rect(x-50, y-80, 100, 30);
  rect(x-25, y-130, 50, 50);

  // arms
  line(x-50, y+100, x+50, y+100);

  // legs
  line(x, y+200, x-50, y+250);
  line(x, y+200, x+50, y+250);

}
