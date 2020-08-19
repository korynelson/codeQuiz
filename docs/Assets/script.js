
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
var score = document.getElementById("score");
var leaders = document.getElementById("leaders");
var tableBody = document.getElementById("tableBody");

var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var formCheck = document.querySelector(".form-check");

//Local storage vars
window.localStorage.clear();
window.localStorage.setItem("index", 0);
window.localStorage.setItem("localScore", 0);

var timeInitial = 600;
var timeElapsed = 0;


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

//Set attributes
startBtn.setAttribute("style", "font-size: 10vw");
startBtn.parentElement.setAttribute("style", "text-align: center");
cardEl.setAttribute("style", "max-width: 100px");
cardEl.setAttribute("style", "text-align: center");




 function startTest(event) {

    if(JSON.parse(JSON.stringify(window.localStorage.getItem("index"))) >= quiz.length-1){
      alert("Quiz Over")
      exitQuiz();
      window.localStorage.setItem("index", 0);
      username();
      renderLeaders();
      resetTimer();
      return
    }
    else if (event.target === startBtn){
        startTimer()
        renderPage();
        startBtn.setAttribute("style", "display:none")
        quizInit();
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

function startTimer(){

  var interval = setInterval(function(){
    var timeRemaining = timeInitial - timeElapsed;
    var minutes = Math.floor(timeRemaining/60);
    var seconds = (timeRemaining - minutes*60);
    minutesDisplay.innerHTML = minutes + "m"
    secondsDisplay.innerHTML = seconds + "s"
    timeElapsed++;

    if (timeRemaining < 0){
      clearInterval(interval);
      minutesDisplay.innerHTML = 0 + "m"
      secondsDisplay.innerHTML = 0 + "s"
    }

    console.log(JSON.parse(JSON.stringify(window.localStorage.getItem("index"))));
    console.log(quiz.length-1);
    
    if (JSON.parse(JSON.stringify(window.localStorage.getItem("index"))) >= quiz.length-1){
      console.log("helooooooooo")
      clearInterval(interval);
    }
   
  },1000);


}

function resetTimer(){
  timeInitial = 600;
  timeElapsed = 0;
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
        timeElapsed = timeElapsed + 30;
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

function username(){
  var user = prompt("Enter your initials for the leaderboard");

  var newUser = {"name": user,
  "score": JSON.parse(window.localStorage.getItem("localScore"))
  }
  storedLeaders = JSON.parse(window.localStorage.getItem("localLeaders"))||[];
  storedLeaders.push(newUser)

  localStorage.setItem("localLeaders",JSON.stringify(storedLeaders))
}

function renderLeaders() {
  tableBody.innerHTML = "";

  // Render a new li for each todo
  for (var i = 0; i < JSON.parse(window.localStorage.getItem("localLeaders")).length; i++) {
    var list = JSON.parse(window.localStorage.getItem("localLeaders"))[i];
    var tr = document.createElement("tr")
    var th = document.createElement("th")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    tableBody.appendChild(tr);
    th.textContent = i+1;
    tr.appendChild(th);
    td1.textContent = list.name;
    tr.appendChild(td1);
    td2.textContent = list.score;
    tr.appendChild(td2);
  }
}

//Add event listeners here
startBtn.addEventListener("click", startTest);
submitBtn.addEventListener("click", startTest);
inlineRadio1.addEventListener("click", registerAnswer);
inlineRadio2.addEventListener("click", registerAnswer); 
inlineRadio3.addEventListener("click", registerAnswer); 
inlineRadio4.addEventListener("click", registerAnswer);
