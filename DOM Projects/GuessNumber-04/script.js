let randomNumber = parseInt(Math.random() * 100 + 1);
let userInput = document.querySelector(".userInput");
let submit = document.querySelector(".submit");
let UserPreviousAttempt = document.querySelector(".attempt");
let remainingAttemptOfUser = document.querySelector(".remaining");
let lowOrHigh = document.querySelector(".lowOrHigh");
let startOver = document.querySelector(".stats");

let p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

// ye check karega ke ap game khel sakte ho ya nahi

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// ye function check karega ke number he add kr rha hai user
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter an valid number");
  } else if (guess < 1) {
    alert("Please enter greater than one number");
  } else if (guess > 100) {
    alert("Please enter less than 100 number");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random Number Was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// ye function check krega ke guess kia number random number ke baraber hai ya nai
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guess right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("number is low");
  } else if (guess > randomNumber) {
    displayMessage("number is high");
  }
}

// user ka jo gas huga wo display karwayenge
function displayGuess(guess) {
  userInput.value = "";
  UserPreviousAttempt.innerHTML += `${guess}, `;
  numGuess++;
  remainingAttemptOfUser.innerHTML = `${11 - numGuess}`;
}

// ye user ko message display karwayega
function displayMessage(message) {
  lowOrHigh.innerHTML = `<p>${message}</p>`;
}

// ye game ko start karne ke liye

function newGame() {
  let newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function (e) {
    let randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    UserPreviousAttempt.innerHTML = "";
    remainingAttemptOfUser.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}

// ye game ko end karega

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("card");
  p.innerHTML = `<h3 id="newGame">Start new game</h3>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
