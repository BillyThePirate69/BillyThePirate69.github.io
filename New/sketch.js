let state;
let menuButton;
let playerChoice;
let compChoice;
let playerChoice1;
let playerChoice2;
let playerChoice3;
let compChoice1;
let compChoice2;
let compChoice3;


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
    choice();
    computerChoice();
    mainGame()

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

// Player's choice via input
function choice(){
      playerChoice = prompt("Choose Rock/Paper/Scissors");
      if (playerChoice === "rock" || "Rock"){
        playerChoice1 = "rock";
      }
      if (playerChoice === "scissors" || "Scissors"){
        playerChoice2 = "paper";
      }
      if (playerChoice === "paper" || "Paper"){
        playerChoice3 = "scissors";
      }
}

// Randomizes computer chances of picking rock/paper/scissors
function computerChoice(){
  compChance = random(9);
  if (compChance <= 3){
    compChoice1 = "rock"
  }
  if (compChance <= 6){
    compChoice2 = "paper"
  }
  if (compChance <= 9){
    compChoice3 = "scissors"
  }
}

function mainGame(){
  if (playerChoice1 === compChoice1){
    text("Issa tie", width/2, height/2, 60, 60);
  }
  if (playerChoice1 === compChoice2){
    text("Issa lose", width/2, height/2, 60, 60);
  }
  if (playerChoice1 === compChoice3){
    text("Issa win", width/2, height/2, 60, 60);
  }
}
