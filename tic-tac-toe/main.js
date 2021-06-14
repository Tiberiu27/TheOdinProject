const Player = (name) => {
    const hasTurn = true;
    const mark = (squareElement, content) => {
        let marker = document.createElement('p');
        marker.setAttribute("class", "markers");
        marker.textContent = content;
        squareElement.appendChild(marker);
    };

    return { name, hasTurn, mark }
}

const DisplayController = (() => {
    let playerOne = Player("Player One");
    let playerTwo = Player("Player Two");
    const turnElement = document.querySelector('h3');
    const newGameElement = document.getElementById('newGame');

    newGameElement.onclick = () => {
        playerOneName = prompt("Enter player one's name: ", "Player One");
        playerOne.name = playerOneName ? playerOneName : "Player One";
        playerTwoName = prompt("Enter player two's name: ", "Player Two");
        playerTwo.name = playerTwoName ? playerTwoName : "Player Two";
        turnElement.textContent = `${playerOne.name}'s turn`
        playerOne.hasTurn = true;
        GameBoard.generator();
    }

    return {
        playerOne,
        playerTwo,
        turnElement,
    }

})();

const GameBoard = ((doc) => {
    let board = [];
    let playerOne = DisplayController.playerOne;
    let playerTwo = DisplayController.playerTwo;
    const mainContainer = doc.getElementById('boardContainer');

    const generator = () => {
        mainContainer.style.pointerEvents = 'auto';
        board = [];
        mainContainer.innerHTML = '';
        for(let i = 0; i < 9; i++) {
            const squareElement = doc.createElement('div');
            squareElement.setAttribute("class", "squares");
            squareElement.setAttribute("id", `square${i + 1}`);
            squareElement.addEventListener('click', (e) => {
                if (!e.target.innerHTML) {
                    if (playerOne.hasTurn) {
                        playerOne.mark(doc.getElementById(e.target.id), 'X');
                        updateBoard(e.target.id, 'X');
                        playerOne.hasTurn = false;
                        DisplayController.turnElement.textContent = `${playerOne.name}'s turn`;
                    } else {
                        playerTwo.mark(doc.getElementById(e.target.id), 'O');
                        updateBoard(e.target.id, 'O');
                        playerOne.hasTurn = true;
                        DisplayController.turnElement.textContent = `${playerTwo.name}'s turn`;
                    }
                    
                }
                evaluateBoard();
            });
            board.push({name: `square${i + 1}`, markedWith: ''});
            mainContainer.appendChild(squareElement);
        }
    }

    const updateBoard = (id, marker) => {
        let index = board.findIndex(space => space.name === id);
        board[index].markedWith = marker;
    }

    const arrayEquals = (a, b) => {
        if (a.length === b.length && a.every((val, index) => val === b[index])) {
            return true;
        }
    }

    const evaluateBoard = () => {
        let winningLines = [
            ["square1", "square2", "square3"], 
            ["square4", "square5", "square6"], 
            ["square7", "square8", "square9"], 
            ["square1", "square4", "square7"],
            ["square2", "square5", "square8"],
            ["square3", "square6", "square9"],
            ["square1", "square5", "square9"], 
            ["square3", "square5", "square7"],
    ];
        let xMarkedSpaces = board.filter(square => square.markedWith === 'X');
        let oMarkedSpaces = board.filter(square => square.markedWith === 'O');

        winningLines.forEach(function(line) {
            if (arrayEquals(xMarkedSpaces.map(space => space.name), line)) {
                mainContainer.style.pointerEvents = 'none';
                DisplayController.turnElement.textContent = `${playerOne.name} has won! Congrats!`; 
            } else if (arrayEquals(oMarkedSpaces.map(space => space.name), line)) {
                mainContainer.style.pointerEvents = 'none';
                DisplayController.turnElement.textContent = `${playerTwo.name} has won! Congrats!`;
            } 
        });

        if (board.every(square => square.markedWith)) {
            DisplayController.turnElement.textContent = "It's a tie!";
        }
    }

    return {
        generator,
        evaluateBoard,
    }
})(document);

window.onload = () => {
    setTimeout(function() {
        document.getElementById('newGame').click();
    }, 2000);
}

