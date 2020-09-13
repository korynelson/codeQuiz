//initialize variables - DOM and local storage
var startBtn = document.querySelector("#startBtn");
var welcomeEl = document.getElementById("welcomeEl")
var qCardEl = document.getElementById("qCard")
var submitBtn = document.querySelector("#submitBtn");
var scoreboardEl  = document.getElementById("scoreboard");
var inlineRadio1 = document.querySelector("#inlineRadio1");
var inlineRadio2 = document.querySelector("#inlineRadio2");
var inlineRadio3 = document.querySelector("#inlineRadio3");
var inlineRadio4 = document.querySelector("#inlineRadio4");
var radioText1 = document.getElementById("radioText1");
var radioText2 = document.getElementById("radioText2");
var radioText3 = document.getElementById("radioText3");
var radioText4 = document.getElementById("radioText4");
var questions = document.querySelector("#questions");
var formCheck = document.getElementsByClassName("form-check")
var score = document.getElementById("score");
var tableBody = document.getElementById("tableBody");

var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");

//Local storage vars
window.localStorage.clear();
window.localStorage.setItem("index", 0);
window.localStorage.setItem("localScore", 0);

//Test Matrix and answers
var answerArray=[];
const quiz = [
{
    question: "Which of the following will write a message in an alert box",
    answer1: "alertBox('Hello World')",
    answer2: "alert(Hello World)",
    answer3: "msg('Hello World')",
    answer4: "alert('Hello World')",
    correct: "alert('Hello World')",
    input: "",
    },
    {
    question: "Which tag should you use to call your JavaScrit into HTML?",
    answer1: "<body>",
    answer2: "There is no such tag",
    answer3: "<script>",
    answer4: "<head>",
    correct: "<script>",
    input: "",
    },
    {
    question: "Which sytax will bring up a prompt box?",
    answer1: "prompt()",
    answer2: "box.prompt()",
    answer3: "msgPrompt()",
    answer4: "alert()",
    correct: "prompt()",
    input: "",
    },
    {
    question: "What does JSON stand for?",
    answer1: "Java Selector Object Numbers",
    answer2: "Joke Scpript October November",
    answer3: "JavaScript Object Notation",
    answer4: "It's Jason's nickname",
    correct: "JavaScript Object Notation",
    input: "",
    },
    {
    question: "Which of the below is the syntax for comments in JavaScript?",
    answer1: "/**/",
    answer2: "//",
    answer3: "<!---->",
    answer4: "''",
    correct: "//",
    input: "",
    },
    {
    question: "Which is the correct way to reference a JavaScript file?",
    answer1: "<script href='xxx.js'>",
    answer2: "<script src='xxx.js'>",
    answer3: "<script name='xxx.js'>",
    answer4: "<a> src='xxx.js'</a>",
    correct: "<script src='xxx.js'>",
    input: "",
    },
    {
    question: "In which HTML element does the JavaScript get loaded?",
    answer1: "<head>",
    answer2: "<div>",
    answer3: "<script>",
    answer4: "<ul>",
    correct: "<script>",
    input: "",
    },
    {
    question: "Which if statement will execture if x=2?",
    answer1: "if(x 2)",
    answer2: "if(x=2)",
    answer3: "if(x==2)",
    answer4: "testif(x==2)",
    correct: "if(x==2)",
    input: "",
    },
    {
    question: "What does DOM stand for?",
    answer1: "It's a name",
    answer2: "Document Object Model",
    answer3: "DOMINATE!!!!",
    answer4: "Delivery on Mode",
    correct: "Document Object Model",
    input: "",
    },
    {
    question: "How do you spell JavaScript?",
    answer1: "JS",
    answer2: "java",
    answer3: "script",
    answer4: "JavaScript",
    correct: "JavaScript",
    input: "",
    },
];

//Main quiz functions 
function startTest(event) {

  if(event.target.textContent === "Submit" & JSON.parse(window.localStorage.getItem("index")) >= quiz.length-1){
    checkAnswer();
    username();
    renderLeaders();
    resetScore();
    resetTimer();
    clearAnswers();
    resetRadio();
    welcomeEl.setAttribute("style", "visibility:visible")
    qCardEl.setAttribute("style", "display:none")
    index()
    return
  }

  else if (event.target === startBtn){
    welcomeEl.setAttribute("style", "display:none")
    window.localStorage.setItem("index", 0);
    renderPage();
    quizInit();
    startTimer();
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
  resetTimer();

  var interval = setInterval(function(){
    var timeRemaining = timeInitial - timeElapsed;
    var minutes = Math.floor(timeRemaining/60);
    var seconds = (timeRemaining - minutes*60);
    minutesDisplay.innerHTML = minutes + "m"
    secondsDisplay.innerHTML = seconds + "s"
    timeElapsed++;

    if (timeRemaining === 0){
      clearInterval(interval);
      resetTimer();
    }
    
    else if (JSON.parse(window.localStorage.getItem("index")) >= quiz.length){
      clearInterval(interval);
    }
   
  },1000);

}

//reset the time after quiz completes
function resetTimer(){
  timeInitial = 300;
  timeElapsed = 0;
}

//initialize quiz by setting radio button text to quiz values
function quizInit(){
  questions.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].question));
  radioText1.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].answer1));
  radioText2.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].answer2));
  radioText3.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].answer3));
  radioText4.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].answer4));
}

//increase the index value to loop through quiz questions
function index(){
  var i = window.localStorage.getItem("index");
  i++;
  window.localStorage.setItem("index", i++);
};

//register the users answer 
function registerAnswer(){
    answerArray[window.localStorage.getItem("index")] = event.target.nextElementSibling.textContent
};

//clear answer array for a new quiz
function clearAnswers(){
  answerArray = [];
};

//check to see if submitted answer is correct - if wrong take off 30 seconds
function checkAnswer(){
  if(answerArray[window.localStorage.getItem("index")] === quiz[window.localStorage.getItem("index")].correct){
    addPoint();
  }
  else{
    timeElapsed = timeElapsed + 30;
  }
};

//clear radio buttons
function resetRadio(){
  inlineRadio1.checked = false;
  inlineRadio2.checked = false;
  inlineRadio3.checked = false;
  inlineRadio4.checked = false;
};

//increment score
function addPoint(){
  var i = window.localStorage.getItem("localScore");
  i++;
  window.localStorage.setItem("localScore", i++);
  score.textContent = JSON.parse(window.localStorage.getItem("localScore"));
};
//reset score to 0/10
function resetScore(){
  window.localStorage.setItem("localScore",0);
  score.textContent = JSON.parse(window.localStorage.getItem("localScore"))
};

//make question card visible
function renderPage(){
  qCardEl.setAttribute("style", "visibility: visible; max-width: 500px; margin:auto;")
};

//Get the users initials and push to local storage
function username(){
  var user = prompt("Enter your initials for the leaderboard");
  var newUser = {"name": user,
  "score": JSON.parse(window.localStorage.getItem("localScore"))
  }
  storedLeaders = JSON.parse(window.localStorage.getItem("localLeaders"))||[];
  storedLeaders.push(newUser)
  localStorage.setItem("localLeaders",JSON.stringify(storedLeaders))
};

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
  }
};

//Add event listeners here
startBtn.addEventListener("click", startTest);
submitBtn.addEventListener("click", startTest);
inlineRadio1.addEventListener("click", registerAnswer);
inlineRadio2.addEventListener("click", registerAnswer); 
inlineRadio3.addEventListener("click", registerAnswer); 
inlineRadio4.addEventListener("click", registerAnswer);
