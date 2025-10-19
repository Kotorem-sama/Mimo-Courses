const inputElement = document.getElementById("guess");
const feedbackElement = document.getElementById("feedback");
let lowestNumberElement = document.getElementById("lowest");
let highestNumberElement = document.getElementById("highest");
let newLowest = document.getElementById("lowest-input");
let newHighest = document.getElementById("highest-input");

let randomNumber = getRandomNumber();
let attempts = 10;

function getRandomNumber(){
  min = Math.ceil(Number(lowestNumberElement.innerHTML));
  max = Math.floor(Number(highestNumberElement.innerHTML));
  return Math.floor((Math.random() * (max + 1 - min)) + min);
}

function checkGuess(){
  attempts--;
  const guess = Number(inputElement.value);

  if (attempts > 0){
    if (guess === randomNumber) {
      attempts = 0;
      feedbackElement.innerHTML = "Congratulations! You guessed correctly!!";
      feedbackElement.style.color = "green";
    }
    else if (guess < randomNumber) {
      feedbackElement.innerHTML = `Too low! Try again. ${attempts} attempts remaining`;
      feedbackElement.style.color = "red";
    }
    else {
      feedbackElement.innerHTML = `Too high! Try again. ${attempts} attempts remaining`;
      feedbackElement.style.color = "red";
    }
  }
  if (guess !== randomNumber && attempts === 0){
    feedbackElement.style.color = "red";
    feedbackElement.innerHTML = "Game over :(";
  }
}

function restart(){
  attempts = 10;
  randomNumber = getRandomNumber();
  feedbackElement.innerHTML = "";
}

function saveHighLow(){
  if (newHighest.value !== ""){
    highestNumberElement.innerHTML = Math.floor(newHighest.value);
  }
  if (newLowest.value !== ""){
    lowestNumberElement.innerHTML = Math.ceil(newLowest.value);
  }
  if (newLowest.value !== "" || newHighest !== "") {
    restart();
    newHighest.value = "";
    newLowest.value = "";
  }
}