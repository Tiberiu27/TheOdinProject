const { Ship } = require('./Ship');

const Gameboard = () => {
    let spaces = [];
    let deployedShips = [];
    let missHits = [];
    let fleetDrown = false;

    const createSpaces = () => {
        for (let i = 1; i < 11; i ++) {
            for (let j = 1; j < 11; j++) {
                let space = {
                    coord: `${i}:${j}`,
                    hasShip: false,
                    occupiedBy: '',
                    isHit: false
                }

                spaces.push(space);
            }
        }
    }

    const placeShip = (coord, len) => {
        const ship = Ship(len)
        //check ship availability
        if(deployedShips.find( ship => ship.len === len)) {
            return;
        }
        const xAxis = Number(coord[coord.length - 1]);
        const yAxis = coord[0];

        if ((xAxis + ship.len - 1) > 10) {
            return;
        }

        for (let i = 0; i < ship.len; i++) {
            const space = spaces.find(space => space.coord === `${yAxis}:${xAxis + i}`);

            if (space.hasShip) {
                throw 'try again';
            }

            space.hasShip = true;
            space.occupiedBy = ship.size;
        }

        deployedShips.push(ship)
    }

    const checkFleet =() => {
        let sunkenShips = deployedShips.filter(ship => ship.isSunk);
        
        if (sunkenShips.length === 3) {
            obj.fleetDrown = true;
        }
    }

    const attackShip = (ship) => {
        if (ship.isSunk) {
            return
        }
        let spot = Math.max(ship.hitSpots) + 1
        ship.hit(spot)
    }

    const recieveAttack = (coord) => {
        let space = spaces.find(space => space.coord === coord);
        if(space.isHit) {
            return;
        }
        space.isHit = true;

        if (space.hasShip) {
            let size = space.occupiedBy
            let ship = deployedShips.find(ship => ship.size === size)
            attackShip(ship)
        } else {
            missHits.push(coord)
        }
        checkFleet();
    }

    createSpaces();

    let obj = {
        spaces,
        missHits,
        deployedShips,
        fleetDrown,
        placeShip,
        recieveAttack
    }

    return obj;
}


module.exports = {
    Gameboard,
}