const randomNumber = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

//Available for game or not
if (playGame) {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 0');
  } else if (guess < 1 || guess > 100) {
    alert('Please enter a number less than 101');
  } else {
    prevGuess.push(guess);
    if (numGuess == 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guess it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is too low');
  } else {
    displayMessage('Number is too high');
  }
}

function displayGuess(guess) {
  // clean the input box
  userInput.value = '';
  //update prev guess && remaining guess
  guesses.innerHTML += `${guess} `;
  numGuess++;

  lastResult.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // Work with DOM manipulation
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute;
}

function newGame() {}
