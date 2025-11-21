const input = require("@mimo-org/input");

let playerWins = 0;
let computerWins = 0;
let rounds = 0;

while (rounds < 3){
  let playerChoice = input("Choose 'odd' or 'even': ");
  let playerNumber = parseInt(input("Choose a number between 1 and 5: "));

  const computerNumber = Math.floor(Math.random() * (5 - 1) + 1);
  let computerChoice = "";

  if (playerChoice === "odd") {
    computerChoice = "even";
  } else {
    computerChoice = "odd";
  }

  let sum = playerNumber + computerNumber;
  let result = "";

  if (sum % 2 === 0){
    result = "even";
  }
  else {
    result = "odd";
  }

  console.log(playerChoice);
  console.log(computerChoice);
  console.log(`${sum} ${result}`);

  if (result === playerChoice) {
    console.log("Player wins");
    playerWins++;
  }
  else {
    console.log("Computer wins");
    computerWins++;
  }

  rounds++;
}

console.log(`Player wins: ${playerWins}\nComputer wins: ${computerWins}`);

if (playerWins > computerWins){
  console.log("You won the best of three!");
}
else {
  console.log("The computer won the best of three...");
}