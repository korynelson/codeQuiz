//initialize items needed from DOM
var startDiv = document.querySelector("start");
var navBtn = document.querySelector("#navBtn");
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



//create quiz info
const quiz = [
    {
    question: "What is your name",
    correct: "Kory",
    answer2: "Jim",
    answer3: "David",
    answer4: "Andrew"
    },
    {
    question: "What is your favorite food?",
    correct: "Mexican",
    answer2: "Pizza",
    answer3: "Mac & Cheese",
    answer4: "Ice Cream"
    },
    {
    question: "Where do you live?",
    correct: "Seattle",
    answer2: "Detroit",
    answer3: "Iowa",
    answer4: "Minneapolis"
    }
];

//testing creations and DOM input
console.log(quiz)

//Set attributes
navBtn.setAttribute("style", "font-size: 10vw");
navBtn.parentElement.setAttribute("style", "text-align: center");


cardEl.setAttribute("style", "max-width: 100px");
cardEl.setAttribute("style", "text-align: center");



function startTest(event) {
    if (event.target === navBtn){
        navBtn.textContent = "Exit Quiz";
        navBtn.setAttribute("style", "font-size: 2vw");
        navBtn.parentElement.setAttribute("style", "text-align: center");

        quizInit()
    }
}

function quizInit(){
    questions.textContent = JSON.parse(JSON.stringify(quiz[0].question));
    radioText1.textContent = JSON.parse(JSON.stringify(quiz[0].correct));
    radioText2.textContent = JSON.parse(JSON.stringify(quiz[0].answer2));
    radioText3.textContent = JSON.parse(JSON.stringify(quiz[0].answer3));
    radioText4.textContent = JSON.parse(JSON.stringify(quiz[0].answer4));
    console.log("attribute set");
}
//Add event listeners here
navBtn.addEventListener("click", startTest);
