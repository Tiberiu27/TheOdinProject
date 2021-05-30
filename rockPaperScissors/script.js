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

function game() {
    let round = 1 
    
    while(round < 6) {
        let result = `Round: ${round} `
        const computerSelection = computerPlay();

        let playerInput = prompt('Please enter rock paper or scissors');
        if (!playerInput) {
            alert('Invalid selection');
            continue;
        }
        playerInput = playerInput.toLowerCase();
        playerInput = playerInput[0].toUpperCase() + playerInput.slice(1);

        if (!'Rock Paper Scissors'.includes(playerInput)) {
            alert('Invalid selection');
            continue;
        }

        result += playRound(playerInput, computerSelection);
        alert(result);
        round++;
    }
}

game();

//helper
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}