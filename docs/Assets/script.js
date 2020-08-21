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
    question: "What does HTML Stand For?",
    answer1: "Home Tool Markup Language",
    answer2: "Homemade Texting Module Language",
    answer3: "Hyperlinks and Text Markup Language",
    answer4: "Hyper Text Markup Language",
    correct: "Hyper Text Markup Language",
    input: "",
    },
    {
    question: "What is the purpose of the <head> tag in HTML?",
    answer1: "Signifies the head section of an HTML document",
    answer2: "There is no such tag",
    answer3: "Signifies the Title on an ",
    answer4: "Signifies the body section of an HTML document",
    correct: "Signifies the head section of an HTML document",
    input: "",
    },
    {
    question: "How many elements should an ID be used for",
    answer1: "As many as you want",
    answer2: "1",
    answer3: "2",
    answer4: "HTML limits you to 15",
    correct: "1",
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
      console.log("helooooooooo")
      console.log(JSON.parse(window.localStorage.getItem("index")))
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
    console.log(JSON.parse(window.localStorage.getItem("localScore")))
    score.textContent = JSON.parse(window.localStorage.getItem("localScore"));
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
};
//reset score to 0/10
function resetScore(){
  window.localStorage.setItem("localScore",0);
  score.textContent = JSON.parse(window.localStorage.getItem("localScore"))
};

//make question card visible
function renderPage(){
  qCardEl.setAttribute("style", "visibility: visible; max-width: 300px; margin:auto;")
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
