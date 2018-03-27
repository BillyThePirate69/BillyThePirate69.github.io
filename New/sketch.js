let state;
let menuButton;
let computerChoice = Math.random(9);
let playerChoice;
let xd;
let playButton;

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
    menu();
  }
  if(state === 1){
    choices();
    decision(playerChoice, computerChoice);

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

function choices(){
  let playerChoice = prompt("Choose Rock, Paper or Scissors");
  if (computerChoice <= 3){
    computerChoice = "rock";
  }
  else if (computerChoice <= 6){
    computerChoice - "paper"
  }
  else{
    computerChoice = "scissors";
  }
}

function decision(playerChoice, computerChoice){
if(playerChoice === computerChoice){
  text("Issa tie", width/2, height/2, 100, 100);
}
if(playerChoice === "rock"){
    if(computerChoice === "scissors"){
        text("Issa win for the player", width/2, height/2, 100, 100);
        computerChoice = random(9);
    }
    else{
        return "paper wins";
    }
}
if(playerChoice === "paper"){
    if(computerChoice === "rock"){
        text("Issa win for the player", width/2, height/2, 100, 100);
        computerChoice = random(9);
    }
    else{
        text("Issa win for the player", width/2, height/2, 100, 100);
        computerChoice = random(9);
    }
}
if(playerChoice === "scissors"){
    if(playerChoice === "rock"){
        text("Issa win for the AI", width/2, height/2, 100, 100);
        computerChoice = random(9);
    }
    else{
        text("Issa win for the AI", width/2, height/2, 100, 100);
        computerChoice = random(9);
    }
  }
}
