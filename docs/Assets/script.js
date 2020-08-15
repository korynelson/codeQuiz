
//initialize variables - DOM and local storage
var startDiv = document.querySelector("start");
var startBtn = document.querySelector("#startBtn");
var submitBtn = document.querySelector("#submitBtn");
var cardEl  = document.querySelector(".card");
var scoreboardEl  = document.querySelector(".scoreboard");
var timeEl  = document.querySelector(".time");
var answers = document.getElementsByName("inlineRadioOptions");
var questions = document.querySelector("#questions");
var formCheck = document.getElementsByClassName("form-check")
var radioText1 = document.getElementById("radioText1");
var radioText2 = document.getElementById("radioText2");
var radioText3 = document.getElementById("radioText3");
var radioText4 = document.getElementById("radioText4");
var inlineRadio1 = document.querySelector("#inlineRadio1");
var inlineRadio2 = document.querySelector("#inlineRadio2");
var inlineRadio3 = document.querySelector("#inlineRadio3");
var inlineRadio4 = document.querySelector("#inlineRadio4");
var score = document.getElementById("score")

var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var formCheck = document.querySelector(".form-check");

//Local storage vars
window.localStorage.clear();
window.localStorage.setItem("index", 0);
window.localStorage.setItem("localScore", 0);
window.localStorage.setItem("localLeaders", 0)

var totalSeconds = 600;
var secondsElapsed = 0;





//Test Matrix and answers
const quiz = [
{
    question: "What is your name",
    answer1: "Kory",
    answer2: "Jim",
    answer3: "David",
    answer4: "Andrew",
    correct: "Kory",
    input: "",
    },
    {
    question: "What is your favorite food?",
    answer1: "Mexican",
    answer2: "Pizza",
    answer3: "Mac & Cheese",
    answer4: "Ice Cream",
    correct: "Mexican",
    input: "",
    },
    {
    question: "Where do you live?",
    answer1: "Seattle",
    answer2: "Detroit",
    answer3: "Iowa",
    answer4: "Minneapolis",
    correct: "Seattle",
    input: "",
    },
    {
    question: "What is your name",
    answer1: "Kory",
    answer2: "Jim",
    answer3: "David",
    answer4: "Andrew",
    correct: "Kory",
    input: "",
    },
    {
    question: "What is your favorite food?",
    answer1: "Mexican",
    answer2: "Pizza",
    answer3: "Mac & Cheese",
    answer4: "Ice Cream",
    correct: "Mexican",
    input: "",
    },
    {
    question: "Where do you live?",
    answer1: "Seattle",
    answer2: "Detroit",
    answer3: "Iowa",
    answer4: "Minneapolis",
    correct: "Seattle",
    input: "",
    },
    {
    question: "What is your name",
    answer1: "Kory",
    answer2: "Jim",
    answer3: "David",
    answer4: "Andrew",
    correct: "Kory",
    input: "",
    },
    {
    question: "What is your favorite food?",
    answer1: "Mexican",
    answer2: "Pizza",
    answer3: "Mac & Cheese",
    answer4: "Ice Cream",
    correct: "Mexican",
    input: "",
    },
    {
    question: "Where do you live?",
    answer1: "Seattle",
    answer2: "Detroit",
    answer3: "Iowa",
    answer4: "Minneapolis",
    correct: "Seattle",
    input: "",
    },
    {
    question: "Where do you live?",
    answer1: "Seattle",
    answer2: "Detroit",
    answer3: "Iowa",
    answer4: "Minneapolis",
    correct: "Seattle",
    input: "",
    },
];

//testing creations and DOM input
console.log(quiz)

//Set attributes
startBtn.setAttribute("style", "font-size: 10vw");
startBtn.parentElement.setAttribute("style", "text-align: center");
cardEl.setAttribute("style", "max-width: 100px");
cardEl.setAttribute("style", "text-align: center");



 function startTest(event) {
     console.log(event)
     if(JSON.parse(JSON.stringify(window.localStorage.getItem("index"))) >= quiz.length-1){
      alert("Quiz Over")
      exitQuiz();
      return
    }
    else if (event.target === startBtn){
        renderTime()
        renderPage();
        startBtn.setAttribute("style", "display:none")

        // startBtn.textContent = "Next Question";
        // startBtn.setAttribute("style", "font-size: 2vw");
        // startBtn.parentElement.setAttribute("style", "text-align: center");
        
        quizInit()
        startTimer()
    }
    else if(event.target.textContent === "Submit"){
        checkAnswer();
        index();
        resetRadio();
        quizInit();
        formCheck.removeClass;

    }
    else if (event.target.textContent === "Exit Quiz"){
        quizExit();
    }
}

function formatMin(){
    var secondsLeft = totalSeconds - secondsElapsed;

    var minutesLeft = Math.floor(secondsLeft / 60);
  
    var formattedMinutes;
  
    if (minutesLeft < 10) {
      formattedMinutes = "0" + minutesLeft;
    } else {
      formattedMinutes = minutesLeft;
    }
  
    return formattedMinutes;
}

function formatSec(){
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;

  var formattedSeconds;

  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }

  return formattedSeconds;
}

function renderTime() {
    // When renderTime is called it sets the textContent for the timer html...
    minutesDisplay.textContent = formatMin();
    secondsDisplay.textContent = formatSec();
  
   // ..and then checks to see if the time has run out
    if (secondsElapsed > totalSeconds) {
      if (status === "Working") {
        alert("Time for a break!");
      } else {
        alert("Time to get back to work!");
      }
  
      stopTimer();
    }
  }

  function stopTimer() {
    secondsElapsed = 0;
    renderTime();
  }

function startTimer(){
    if (totalSeconds > 0) {
        /* The "interval" variable here using "setInterval()" begins the recurring increment of the
           secondsElapsed variable which is used to check if the time is up */
            interval = setInterval(function() {
            secondsElapsed++;
    
            // So renderTime() is called here once every second.
        renderTime()
            ;
          }, 1000);
      } else {
        alert("Minutes of work/rest must be greater than 0.")
      }
}

function quizInit(){
    questions.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].question));
    radioText1.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].answer1));
    radioText2.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].answer2));
    radioText3.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].answer3));
    radioText4.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].answer4));
   
}

function index(){
    var i = window.localStorage.getItem("index");
    i++;
    window.localStorage.setItem("index", i++);
}

function quizExit(){
    questions.textContent = ("");
    radioText1.textContent = ("");
    radioText2.textContent = ("");
    radioText3.textContent = ("");
    radioText4.textContent = ("");
}

function registerAnswer(event){
    quiz[window.localStorage.getItem("index")].input = event.target.nextElementSibling.textContent
};

function checkAnswer(){
    if(quiz[window.localStorage.getItem("index")].input === quiz[window.localStorage.getItem("index")].correct){
        //alert("that is correct")
        addPoint();
        score.textContent = JSON.parse(JSON.stringify(window.localStorage.getItem("localScore")));
      }
    else{
        //alert("WRONG!")
    }
    };

function resetRadio(){
  inlineRadio1.checked = false;
  inlineRadio2.checked = false;
  inlineRadio3.checked = false;
  inlineRadio4.checked = false;
}

function addPoint(){
  var i = window.localStorage.getItem("localScore");
  i++;
  window.localStorage.setItem("localScore", i++);
  console.log(window.localStorage.getItem("localScore"))
}

function renderPage(){
  timeEl.setAttribute("style", "display:block")
  submitBtn.setAttribute("style", "display:block")
  cardEl.setAttribute("style", "display:grid")
  scoreboardEl.setAttribute("style", "display:block")
}

function exitQuiz(){
  timeEl.setAttribute("style", "display:none")
  submitBtn.setAttribute("style", "display:none")
  cardEl.setAttribute("style", "display:none")
  scoreboardEl.setAttribute("style", "display:none")
  startBtn.setAttribute("style", "display:grid")

}

//Add event listeners here
startBtn.addEventListener("click", startTest);
submitBtn.addEventListener("click", startTest);
inlineRadio1.addEventListener("click", registerAnswer);
inlineRadio2.addEventListener("click", registerAnswer); 
inlineRadio3.addEventListener("click", registerAnswer); 
inlineRadio4.addEventListener("click", registerAnswer);
