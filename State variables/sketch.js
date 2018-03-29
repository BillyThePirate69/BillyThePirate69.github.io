// State Variable assignment, Rock paper scissors
// Bill Tran
// March 12th 2018

let state;
let menuButton;
let computerChoice = "";
let playerChoice = "";
let continueGame;

// preloading images that were imported
function preload(){
   xd = loadImage('images/alpha.jpg');
   playbutton = loadImage('images/sixfive.jpg');
}

function setup() {
  createCanvas(1200, 1200);
  state = 0;
}

// creates seperate states for menu and game
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

// This function creates the menu state, mostly the playbutton/text
function menu(){
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  textSize(60);
  text("Rock, Paper, Scissors XD", width/2 - 300, height/2 - 200);
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

//This function receives the player's input and creates the AI's input randomly
function choices(){
  playerChoice = prompt("Choose Rock, Paper or Scissors (keep in mind that this is NOT case sensitive)");
  // alerts player if they put in no input or wrong input
  while (playerChoice !=="rock" && playerChoice !=="paper" && playerChoice !=="scissors"){
    alert("Read the instructions you heck!")
    playerChoice = prompt("Choose Rock, Paper or Scissors");
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

// Function will decide whether playerChoice or computerChoice will beat the other
function decision(playerChoice, computerChoice){
  print(playerChoice + "   " + computerChoice);

  if(playerChoice === "rock"){
    if(computerChoice === "scissors"){
      alert("The computer picked " + computerChoice);
      alert("Issa win for you!");
    }
    else if(playerChoice === computerChoice){
      alert("The computer picked " + computerChoice);
      alert("Issa tie");
    }
    else{
      alert("The computer picked " + computerChoice);
      alert("Issa win for the AI ;(");
    }
  }
  if(playerChoice === "paper"){
    if(computerChoice === "rock"){
      alert("The computer picked " + computerChoice);
      alert("Issa win for you!");
    }
    else if(playerChoice === computerChoice){
      alert("The computer picked " + computerChoice);
      alert("Issa tie");
    }
    else{
      alert("The computer picked " + computerChoice);
      alert("Issa win for you!");
    }
  }
  if(playerChoice === "scissors"){
    if(computerChoice === "rock"){
        alert("The computer picked " + computerChoice);
        alert("Issa win for the AI");
    }
    else if(playerChoice === computerChoice){
      alert("The computer picked " + computerChoice);
      alert("Issa tie");
    }
    else{
      alert("The computer picked " + computerChoice);
      alert("Issa win for you!");

    }
  }
}
