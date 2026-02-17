// Project: Rock Paper Scissors

// Step 1: Set up the project structure - DONE

//Step 2: Write the logic to get the computer choice
// 1. Generate a random decimal value between 0 and 1.
// 2. Split the value range into three equal intervals.
// 3. Use conditional checks to determine which interval the value falls into.
// 4. Output the corresponding choice.

function getComputerChoice () {

  const computerChoice = Math.random();
  console.log(computerChoice); 

  if (computerChoice < 1/3) {
    return "ROCK";
  } else if (computerChoice < 2/3) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}


//Get human choice
function getHumanChoice () {
  let humanChoice = prompt("Select from Rock, Paper or Scissors");
  humanChoice = humanChoice.toUpperCase();
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round
// Write a function that takes the human and computer choices as arguments
// Plays a single round
// Increment the round winner's score 
// Logs a winner announcement

function playRound (humanChoice, computerChoice) {
  if (humanChoice === "ROCK" && computerChoice === "ROCK") {
    alert ("We have a tie.");
    return;
  }
  else if (humanChoice === "PAPER" && computerChoice ==="ROCK") {
    alert ("You won! Paper beats Rock");
    return humanScore += 1;
  }
  else if (humanChoice === "SCISSORS" && computerChoice ==="ROCK") {
    alert ("You lose! Rock beats Scissors");
    return computerScore += 1;
  }
  else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
    alert ("You lose! Paper beats Rock")
    return computerScore += 1;;
  }
  else if (humanChoice === "PAPER" && computerChoice ==="PAPER") {
    alert ("We have a tie.");
  }
  else if (humanChoice === "SCISSORS" && computerChoice ==="PAPER") {
    alert ("You won! Scissors beats Paper");
    return humanScore += 1;
  }
  if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    alert ("You won! Rock beats Scissors");
    return humanScore += 1;
  }
  else if (humanChoice === "PAPER" && computerChoice ==="SCISSORS") {
    alert ("You lose! Scissors beats Paper");
    return computerScore += 1;
  }
  else if (humanChoice === "SCISSORS" && computerChoice ==="SCISSORS") {
    alert ("We have a tie.");
  }
}

playRound(getHumanChoice(), getComputerChoice());
console.log(computerScore);
console.log(humanScore);




