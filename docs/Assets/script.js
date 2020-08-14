//load quiz 
load('/quiz.js')
//initialize variables - DOM and local storage
var startDiv = document.querySelector("start");
var startBtn = document.querySelector("#startBtn");
var submitBtn = document.querySelector("#submitBtn");
var cardEl  = document.querySelector(".card");
var answers = document.getElementsByName("inlineRadioOptions");
var questions = document.querySelector("#questions")
var radioText1 = document.getElementById("radioText1");
var radioText2 = document.getElementById("radioText2");
var radioText3 = document.getElementById("radioText3");
var radioText4 = document.getElementById("radioText4");
var inlineRadio1 = document.querySelector("inlineRadio1");
var inlineRadio2 = document.querySelector("inlineRadio2");
var inlineRadio3 = document.querySelector("inlineRadio3");
var inlineRadio4 = document.querySelector("inlineRadio4");
window.localStorage.clear();
window.localStorage.setItem("index",0);

console.log(quiz)


//testing creations and DOM input
console.log(quiz)

//Set attributes
startBtn.setAttribute("style", "font-size: 10vw");
startBtn.parentElement.setAttribute("style", "text-align: center");
cardEl.setAttribute("style", "max-width: 100px");
cardEl.setAttribute("style", "text-align: center");



 function startTest(event) {
    if (event.target === startBtn){
        startBtn.textContent = "Next Question";
        startBtn.setAttribute("style", "font-size: 2vw");
        startBtn.parentElement.setAttribute("style", "text-align: center");

        quizInit()
        startTimer()
    }
    else if(event.target.textContent === "Submit"){
        checkAnswer();
    }
    else if (event.target.textContent === "Exit Quiz"){
        quizExit();
    }
}

function startTimer(){

}

function quizInit(){
    questions.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.index[0]].question));
    radioText1.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.index[0]].answer1));
    radioText2.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.index[0]].answer2));
    radioText3.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.index[0]].answer3));
    radioText4.textContent = JSON.parse(JSON.stringify(quiz[window.localStorage.index[0]].answer4));
    console.log("attribute set");
    console.log(window.localStorage.index[0])

    //incriment local storage index 
    var i = window.localStorage.index[0];
    i++;
    window.localStorage.setItem("index",i);

}

function quizExit(){
    questions.textContent = ("");
    radioText1.textContent = ("");
    radioText2.textContent = ("");
    radioText3.textContent = ("");
    radioText4.textContent = ("");
}

function checkAnswer(){

    }


//Add event listeners here
startBtn.addEventListener("click", startTest);
submitBtn.addEventListener("click", startTest);

