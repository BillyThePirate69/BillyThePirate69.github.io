let tyler1;
let xd;

function preload(){
  tyler1 = loadSound("assets/Tyler1 Scream.mp3");
  xd = loadSound("assets/REEEEEEEEEE.mp3");
  ree = loadImage("images/ree.jpg");
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  tyler1.setVolume(1.0);


}

function deviceShaken(){
  xd.play();
  image(ree,0,0,windowWidth,windowHeight);
}
