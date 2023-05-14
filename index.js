var readlineSync = require("readline-sync");

var score = 0;

// High Scores :
var highScores = [
  {
    name: "Manthan",
    score: 5,
  },

  {
    name: "Ace",
    score: 3,
  },
  {
    name: "Marco",
    score: 3,
  },
  {
    name: "Zozu",
    score: 4,
  },
];

// Questions on Manthan :
var questions = [
  {
    question: "Where do I live? ",
    answer: "Bangalore",
  },
  {
    question: "What is my favorite Color? ",
    answer: "Blue",
  },
  {
    question: "In which company do I work? ",
    answer: "Supernova",
  },
  {
    question: "What is my Age? ",
    answer: "21",
  },
  {
    question: "What is my favourite programming language? ",
    answer: "Java",
  },
];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log(
    "Welcome " +
      userName +
      " to the quiz App of-Do you know Manthan?" +
      " Hello " +
      userName +
      ", I am Manthan, here come the questions :- "
  );
}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    // branching
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log("You SCORED: ", score);

  console.log("Check out the High Scores :");

  highScores.map((score) => console.log(score.name, " : ", score.score));
}

welcome();
game();
showScores();
