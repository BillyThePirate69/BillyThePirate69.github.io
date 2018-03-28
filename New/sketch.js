let state;
let menuButton;
let computerChoice = "";
let playerChoice = "";
let continueGame;

function preload(){
   xd = loadImage('images/alpha.jpg');
   playbutton = loadImage('images/sixfive.jpg');
}

function setup() {
  createCanvas(1200, 1200);
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
    if (mouseIsPressed) {
      state = 1;
      background(255);
    }
  }

  image(xd, windowWidth, windowHeight);
}

function choices(){
  playerChoice = prompt("Choose Rock, Paper or Scissors");
  if (!playerChoice){
    alert("Make a decision dummy");
  }
  computerChoice = random(9);
  if (computerChoice <= 3){
    computerChoice = "rock";
  }
  else if (computerChoice <= 6){
    computerChoice = "paper"
  }
  else{
    computerChoice = "scissors";
  }
}

function decision(playerChoice, computerChoice){
  print(playerChoice + "   " + computerChoice);
  if(playerChoice === computerChoice){
    alert("The computer picked " + computerChoice);
    alert("Issa tie");
  }
  if(playerChoice === "rock"){
    if(computerChoice === "scissors"){
      alert("The computer picked " + computerChoice);
      alert("Issa win for the player");
    }
    else{
      alert("The computer picked " + computerChoice);
      alert("Issa win for the AI");
    }
  }
  if(playerChoice === "paper"){
    if(computerChoice === "rock"){
      alert("The computer picked " + computerChoice);
      alert("Issa win for the player");
    }
    else{
      alert("The computer picked " + computerChoice);
      alert("Issa win for the player");
    }
  }
  if(playerChoice === "scissors"){
    if(computerChoice === "rock"){
        alert("The computer picked " + computerChoice);
        alert("Issa win for the AI");
    }
    else{
      alert("The computer picked " + computerChoice);
      alert("Issa win for the player");

    }
  }
}
