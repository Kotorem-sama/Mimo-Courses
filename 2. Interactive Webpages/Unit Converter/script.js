let milesToKm = false;
let result = 0;

function convert(){
  const inputValue = document.getElementById("userInput").value;
  const unit = document.getElementById("unit").value;

  if (unit === "milesToKm") {
    result = inputValue * 1.60934;
  }
  else {
    result = inputValue / 1.60934;
  }

  const resultString = inputValue + " miles are " + result + " km";
  const resultElement = document.getElementById('resultElement');
  resultElement.innerHTML = resultString;
}