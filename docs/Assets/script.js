//initialize variables - DOM and local storage
var startBtn = document.querySelector("#startBtn");
var welcomeEl = document.getElementById("welcomeEl")
var qCardEl = document.getElementById("qCard")
var submitBtn = document.querySelector("#submitBtn");
var scoreboardEl  = document.getElementById("scoreboard");



var startDiv = document.querySelector("start");
var cardEl  = document.querySelector(".card");
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
var answerArray=[];
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

 function startTest(event) {

    if(JSON.parse(JSON.stringify(window.localStorage.getItem("index"))) >= quiz.length-1){
      alert("Quiz Over")
      username();
      renderLeaders();
      resetTimer();
      resetScore();
      console.log(quiz)

      clearAnswers();
      console.log(quiz)
      window.localStorage.setItem("index", 0);
      return
    }

    else if (event.target === startBtn){
      welcomeEl.setAttribute("style", "display:none")
      renderPage();
      quizInit();
      startTimer()
      var points = [40, 100, 1, 5, 25, 10];
      var asorted = points.sort(function(a, b){return b - a});
      console.log(points)
      console.log(asorted)
      
    }

    else if(event.target.textContent === "Submit"){
        checkAnswer();
        resetRadio();
        index();
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
    
    if (JSON.parse(JSON.stringify(window.localStorage.getItem("index"))) > quiz.length-1){
      console.log("helooooooooo")
      clearInterval(interval);
    }
   
  },1000);

}

function resetTimer(){
  timeInitial = 60;
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


function registerAnswer(){
    answerArray[window.localStorage.getItem("index")] = event.target.nextElementSibling.textContent
    console.log(answerArray)
};

function clearAnswers(){
  answerArray = [];
}

function checkAnswer(){
    if(answerArray[window.localStorage.getItem("index")] === quiz[window.localStorage.getItem("index")].correct){
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

function resetScore(){
  window.localStorage.setItem("localScore",0);
  score.textContent = JSON.parse(window.localStorage.getItem("localScore"))

}

function renderPage(){
  qCardEl.setAttribute("style", "visibility: visible; max-width: 300px; margin:auto;")
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

//Render leader board at botom of page
function renderLeaders() {
  
  //sort leaders before rendering
  var lead = JSON.parse(window.localStorage.getItem("localLeaders"))
  lead.sort(function(a,b){
  return b.score-a.score;
  });

  //turn on scoreboard and enable html
  tableBody.innerHTML = "";
  scoreboardEl.setAttribute("style","visibility:visible")

  // Render a new li for each todo with dynamic html
  for (var i = 0; i < lead.length; i++) {
    var list = lead[i];
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
    console.log("here2")
  }
}

//Add event listeners here
startBtn.addEventListener("click", startTest);
submitBtn.addEventListener("click", startTest);
inlineRadio1.addEventListener("click", registerAnswer);
inlineRadio2.addEventListener("click", registerAnswer); 
inlineRadio3.addEventListener("click", registerAnswer); 
inlineRadio4.addEventListener("click", registerAnswer);
