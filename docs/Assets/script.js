
//initialize variables - DOM and local storage
var startDiv = document.querySelector("start");
var startBtn = document.querySelector("#startBtn");
var submitBtn = document.querySelector("#submitBtn");
var cardEl  = document.querySelector(".card");
var answers = document.getElementsByName("inlineRadioOptions");
var questions = document.querySelector("#questions");
var radio = document.querySelector("radio");
var radioText1 = document.getElementById("radioText1");
var radioText2 = document.getElementById("radioText2");
var radioText3 = document.getElementById("radioText3");
var radioText4 = document.getElementById("radioText4");
var inlineRadio1 = document.querySelector("#inlineRadio1");
var inlineRadio2 = document.querySelector("#inlineRadio2");
var inlineRadio3 = document.querySelector("#inlineRadio3");
var inlineRadio4 = document.querySelector("#inlineRadio4");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var formCheck = document.querySelector(".form-check");
window.localStorage.clear();
window.localStorage.setItem("index", 0);


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
    if (event.target === startBtn){
        startBtn.textContent = "Next Question";
        startBtn.setAttribute("style", "font-size: 2vw");
        startBtn.parentElement.setAttribute("style", "text-align: center");
        
        quizInit()
        startTimer()
    }
    else if(event.target.textContent === "Submit"){
        console.log("made it")
        checkAnswer();
        index()
        quizInit()
    }
    else if (event.target.textContent === "Exit Quiz"){
        quizExit();
    }
}

function startTimer(){


}

function quizInit(){
    questions.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].question));
    radioText1.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].answer1));
    radioText2.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].answer2));
    radioText3.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].answer3));
    radioText4.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.getItem("index")].answer4));
    console.log("attribute set");

    //incriment local storage index 
    index()
}

function index(){
    var i = window.localStorage.getItem("index");
    i++;
    window.localStorage.setItem("index", i++);
    console.log(window.localStorage.getItem("index"))
}

function quizExit(){
    questions.textContent = ("");
    radioText1.textContent = ("");
    radioText2.textContent = ("");
    radioText3.textContent = ("");
    radioText4.textContent = ("");
}

function registerAnswer(event){
    console.log(event.target.nextElementSibling.textContent)
    console.log(window.localStorage.getItem("index"))
    quiz[window.localStorage.getItem("index")].input = event.target.nextElementSibling.textContent
    console.log(quiz)
};

function checkAnswer(){
    
    };


//Add event listeners here
startBtn.addEventListener("click", startTest);
submitBtn.addEventListener("click", startTest);
inlineRadio1.addEventListener("click", registerAnswer);
inlineRadio2.addEventListener("click", registerAnswer); 
inlineRadio3.addEventListener("click", registerAnswer); 
inlineRadio4.addEventListener("click", registerAnswer);
