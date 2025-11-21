const input = require("@mimo-org/input");
var winner;

let cards = [
  { rank: "2", value: 2 },
  { rank: "3", value: 3 },
  { rank: "4", value: 4 },
  { rank: "5", value: 5 },
  { rank: "6", value: 6 },
  { rank: "7", value: 7 },
  { rank: "8", value: 8 },
  { rank: "9", value: 9 },
  { rank: "10", value: 10 },
  { rank: "J", value: 10 },
  { rank: "Q", value: 10 },
  { rank: "K", value: 10 },
  { rank: "A", value: 11 },
];

function drawCard() {
  return cards[Math.floor(Math.random() * cards.length)];
}

function calculateHandValue(hand) {
  let total = 0;
  let aces = 0;

  for (let i = 0; i < hand.length; i++) {
    total += hand[i].value;
    if (hand[i].rank === "A") aces++;
  }

  while (total > 21 && aces > 0) {
    total -= 10;
    aces--;
  }

  return total;
}

function displayHand(hand){
  console.log("Your hand: " + hand.map(c => c.rank).join(", "));
}

function displayDealerHand(hand, firstCardOnly){
  if (firstCardOnly){
    console.log("Dealers hand: " + hand[0].rank + ", ?");
  }
  else {
    console.log("Dealers hand: " + hand.map(c => c.rank).join(", "));
  }
}

let playerHand = [drawCard(), drawCard()];
let playerValue = calculateHandValue(playerHand);
displayHand(playerHand);
console.log(`Your score: ${playerValue}`);

let dealerHand = [drawCard(), drawCard()];
let dealerValue = calculateHandValue(dealerHand);
displayDealerHand(dealerHand, true);

while (playerValue < 21) {
  const action = input('Do you want to (h)it or (s)tand? ');
  if (action === 'h') {
    playerHand.push(drawCard());
    playerValue = calculateHandValue(playerHand);
    displayHand(playerHand);
    console.log(`Your score: ${playerValue}`);
  } else if (action === 's') {
    break;
  } else {
    console.log('Invalid input, please choose "h" to hit or "s" to stand.');
  }
}

if (playerValue > 21){
  console.log("You lose :(");
  winner = "Dealer";
}
else {
  while (dealerValue < 17){
    dealerHand.push(drawCard());
    dealerValue = calculateHandValue(dealerHand);
  }
  if (playerValue > dealerValue || dealerValue > 21){
    winner = "Player";
  }
  else if (playerValue === dealerValue){
    winner = "Tie";
  }
  else {
    winner = "Dealer";
  }
}

console.log(`Winner: ${winner}`);