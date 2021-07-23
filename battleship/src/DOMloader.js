const { Game } = require('./Game');

const DOMloader = (() => {

    const loadNav = () => {
       const nav = document.getElementsByTagName('nav')[0];
       nav.innerHTML = '';
       const navTitle = document.createElement('h1');
       navTitle.textContent = `${Game.player.hasTurn ? 'Your' : 'Enemy'} turn`;
       nav.appendChild(navTitle);

    }

    const loadContainer = (board, id, title) => {
        const container = document.createElement('div');
        container.setAttribute('id', id);

        const boardTtile = document.createElement('h1');
        boardTtile.textContent = title;

        const boardContainer = document.createElement('div');
        boardContainer.setAttribute('id',  id === 'left-container' ? 'left-board' : 'right-board');

        board.spaces.forEach(space => {
            let square = document.createElement('div');
            square.setAttribute('id', `${space.coord}`);
            square.classList.add('spaces');
            square.addEventListener('click', (e) => {
                board.recieveAttack(e.target.id);
                square.style.background = 'red';
                Game.switchTurns();
                loadNav();
                if (Game.playerBoard.fleetDrown || Game.compBoard.fleetDrown) {
                    gameOver();
                }
            })

            if(space.hasShip && board === Game.playerBoard) {
                square.style.background = 'blue';
            }

            boardContainer.appendChild(square);
        });

        container.appendChild(boardTtile);
        container.appendChild(boardContainer);
        document.getElementById('main-container').appendChild(container);
    }

    const loadMainContainer = () => {
       const mainContainer = document.getElementById('main-container');

        loadContainer(Game.playerBoard, 'left-container', 'Your board');

        loadContainer(Game.compBoard, 'right-container', "Enemy's board");
    }

    const gameOver = () => {
        const mainContainer = document.getElementById('main-container');
        mainContainer.innerHTML = '';

        mainContainer.style.justifyContent = 'center';
        mainContainer.style.alignItems = 'center';

        const gameOverMessage = document.createElement('h2');
        gameOverMessage.style.fontSize = '50px';
        gameOverMessage.textContent = `Game Over! ${Game.compBoard.fleetDrown ? 'You' : 'Your enemy has '} won!`;

        mainContainer.appendChild(gameOverMessage);
    }

    return {
        loadNav,
        loadMainContainer
    }

})();

module.exports = {
    DOMloader,
}