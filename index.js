var readlineSync = require("readline-sync");

var score = 0;


var highScores = [
  {
    name: "Sush",
    score: 3,
  },

  {
    name:"Mohith",
    score: 2,
  },
]


var questions = [{
  question: "Where do I live? ",
  answer: "Nellore"
}, {
  question: "My favorite superhero would be? ",
  answer: "Thor"
},
{
  question: "Where do I work? ",
  answer: "Microsoft"
},
{
 question:"What is my favorite color?  ",
 answer:"white"
},
{
  question:"What is my favorite IPL team? ",
  answer:"CSK"

},
{ question:"what is my favorite food? ",
  answer:"Idly"
},
{  question:"what is my favorite place? ",
   answer:"Maldives"
}

];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to : Do you know Gowtham ?");
}



function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();