const randomNumber = parseInt(Math.random() * 100 + 1);
let userInput = document.querySelector(".userInput");
let submit = document.querySelector(".submit");
let UserPreviousAttempt = document.querySelector(".attempt");
let remainingAttemptOfUser = document.querySelector(".remaining");
let lowOrHigh = document.querySelector(".lowOrHigh");
let startOver = document.querySelector(".stats");

let form = document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();

})