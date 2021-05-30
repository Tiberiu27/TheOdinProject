
//GUI
const body = document.querySelector('body');

const buttonContainer = document.createElement('div');

const scissorsButton = document.createElement('button');
scissorsButton.setAttribute('id', 'scissorsButton');
scissorsButton.textContent = "Scissors";

const paperButton = document.createElement('button');
paperButton.setAttribute('id', 'paperButton');
paperButton.textContent = "Paper";

const rockButton = document.createElement('button');
rockButton.setAttribute('id', 'rockButton');
rockButton.textContent = "Rock";

const resultMessage = document.createElement('h3');
resultMessage.textContent = "";

buttonContainer.appendChild(scissorsButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(rockButton);

body.appendChild(resultMessage);
body.appendChild(buttonContainer);

//logic
function computerPlay() {
    let random = generateRandomNumber(1, 4);

    switch (random) {
        case 1:
            return 'Scissors';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Rock';
            break;
        default:
            return 'Unknown AI choice';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    const winMessage = `You win! ${playerSelection} beats ${computerSelection}`
    const loseMessage = `You lose! ${computerSelection} beats ${playerSelection}!`
    const tieMessage = `It's a tie! You both picked ${playerSelection}`

    if (playerSelection === 'Scissors') {
        if (computerSelection === 'Scissors') {
            return tieMessage;
        } else if (computerSelection === 'Rock') {
            return loseMessage;
        } else {
            return winMessage;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            return loseMessage;
        } else if (computerSelection === 'Rock') {
            return winMessage;
        } else {
            return tieMessage;
        }
    } else {
        if (computerSelection === 'Scissors') {
            return winMessage;
        } else if (computerSelection === 'Paper') {
            return loseMessage;
        } else {
            return tieMessage;
        }
    }
}

let score = 0;

function game(buttonText) {
    let result = ``
    const computerSelection = computerPlay();
    const playerInput = buttonText;

    result += playRound(playerInput, computerSelection);

    if(result.includes('You win')) {
        score++;
    }

    resultMessage.textContent = `${result} Your score is ${score}`;
}

//add listeners to buttons;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (score < 5) {
            game(button.textContent);
        } else {
            resultMessage.textContent = "That's it! you only can play for so long!"
        }
    });
});

//helper
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}