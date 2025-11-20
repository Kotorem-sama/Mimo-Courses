const questions = [
  "What planet is known as the 'Red Planet'?",
  "Who painted the Mona Lisa?",
  "What is the largest ocean on Earth?",
  "Which language has the most native speakers?",
  "Who wrote the play 'Romeo and Juliet'?",
  "What is the capital city of Japan?",
  "Which element has the chemical symbol 'O'?",
  "How many continents are there on Earth?",
  "In which year did the Titanic sink?",
  "What is the fastest land animal?",
  "Which planet has the most moons?",
  "What is the smallest country in the world?",
  "Who discovered penicillin?",
  "Which gas do plants absorb during photosynthesis?",
  "What is the hardest natural substance on Earth?"
];

const choicesArray = [
  ["Earth", "Mars", "Jupiter", "Saturn"],
  ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
  ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
  ["English", "Mandarin Chinese", "Spanish", "Hindi"],
  ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
  ["Beijing", "Tokyo", "Seoul", "Bangkok"],
  ["Gold", "Oxygen", "Hydrogen", "Carbon"],
  ["5", "6", "7", "8"],
  ["1912", "1914", "1920", "1905"],
  ["Cheetah", "Lion", "Horse", "Leopard"],
  ["Saturn", "Jupiter", "Mars", "Neptune"],
  ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
  ["Alexander Fleming", "Isaac Newton", "Marie Curie", "Louis Pasteur"],
  ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  ["Diamond", "Gold", "Iron", "Quartz"]
];

const correctAnswers = [
  "Mars",
  "Da Vinci",
  "Pacific Ocean",
  "Mandarin Chinese",
  "William Shakespeare",
  "Tokyo",
  "Oxygen",
  "7",
  "1912",
  "Cheetah",
  "Jupiter",
  "Vatican City",
  "Alexander Fleming",
  "Carbon Dioxide",
  "Diamond"
];


let currentQuestionIndex = 0;
let score = 0;

function checkAnswer(button){
  if (button.innerHTML === correctAnswers[currentQuestionIndex]){
    score++;
  }
  currentQuestionIndex++;
  displayQuestion();
}

function displayQuestion(){

  document.getElementById("score").innerHTML = score + " / " + questions.length;

  if (currentQuestionIndex < (questions.length)){
    const questionH2 = document.getElementById("question");
    questionH2.innerHTML = questions[currentQuestionIndex];

    for (let i = 0; i < 4; i ++){
      const btn = document.getElementById("choice" + (i + 1));
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.value = choicesArray[currentQuestionIndex][i];
    }
  } else {
    const result = document.getElementById("result");
    result.innerHTML = `Final score: ${score} out of ${questions.length}!`;

    document.getElementById("question").style.display = "none";
    document.getElementById("choices").style.display = "none";
    document.getElementById("pOfScore").style.display = "none";

    document.getElementById("retry").style.display = "inline-block";

  }
}

function retryGame(){
  score = 0;
  currentQuestionIndex = 0;

  document.getElementById("result").innerHTML = "";
  document.getElementById("retry").style.display = "none";

  document.getElementById("question").style.display = "inline-block";
  document.getElementById("choices").style.display = "inline-block";
  document.getElementById("pOfScore").style.display = "inline-block";

  displayQuestion();
}

displayQuestion();