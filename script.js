// Project: Rock Paper Scissors

// Step 1: Set up the project structure - DONE

//Step 2: Write the logic to get the computer choice
// 1. Generate a random decimal value between 0 and 1.
// 2. Split the value range into three equal intervals.
// 3. Use conditional checks to determine which interval the value falls into.
// 4. Output the corresponding choice.

function getComputerChoice () {

  const computerChoice = Math.random();
  // console.log(computerChoice); - debugging for accurate conversion 

  if (computerChoice < 1/3) {
    console.log("Rock");
  } else if (computerChoice < 2/3) {
    console.log("Paper");
  } else {
    console.log("Scissors")
  }
}

getComputerChoice();

//Get human choice
function getHumanChoice () {
  const humanChoice = prompt("Select from Rock, Paper or Scissors");
  return humanChoice;
}

// console.log(getHumanChoice()); for debugging 

let humanScore = 0;
let computerScore = 0;


