const { Player } = require('./Player');
const { Gameboard } = require('./Gameboard');

const Game = (() => {
    const playerBoard = Gameboard();
    const compBoard = Gameboard();

    placeRandomShip(playerBoard, 3);
    placeRandomShip(playerBoard, 5);
    placeRandomShip(playerBoard, 7);

     placeRandomShip(compBoard, 3);
     placeRandomShip(compBoard, 5);
     placeRandomShip(compBoard, 7);


    const player = Player(compBoard);  
    const comp = Player(playerBoard);

    comp.isComputer = true;

    player.hasTurn = true;


    const switchTurns = () => {
        if (player.hasTurn) {
            player.hasTurn = false;
            comp.hasTurn = true;
            
            setTimeout(() => {
                comp.attack();
            }, 1000);

        } else if (!player.hasTurn) {
            comp.hasTurn = false;
            player.hasTurn = true;
        }
    }

    function placeRandomShip (board, len) {
        let xAxis = Math.floor(Math.random() * 10) + 1;
        let yAxis = Math.floor(Math.random() * 10) + 1;
        let coord = `${yAxis}:${xAxis}`;

        if(xAxis + len > 10) {
            placeRandomShip(board, len);
        }
        try {
            board.placeShip(coord, len);
        } catch (e) {
            placeRandomShip(board, len);
        }
    }

    return  {
        player,
        comp,
        playerBoard,
        compBoard,
        switchTurns,
    }
})();

module.exports = {
    Game,
}