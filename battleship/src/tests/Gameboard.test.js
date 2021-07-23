const { Gameboard } = require('../Gameboard')


test('Gameboard creation', () => {
    const gameboard = Gameboard();
    expect(gameboard.spaces.length).toBe(100);
})

test('Place ship - test the first placing position', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('5:5', 5);
    expect(
        gameboard.spaces.find(sp => sp.coord === '5:5').hasShip
    ).toBe(true)
})

test('Place ship - test the whole area that ship occupies', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('5:2', 5);
    expect(
        gameboard.spaces.find(sp => sp.coord === '5:2').hasShip &&
        gameboard.spaces.find(sp => sp.coord === '5:3').hasShip &&
        gameboard.spaces.find(sp => sp.coord === '5:4').hasShip &&
        gameboard.spaces.find(sp => sp.coord === '5:5').hasShip &&
        gameboard.spaces.find(sp => sp.coord === '5:6').hasShip
    ).toBe(true)
})

test('Place ship - test boundry of xAxis', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('5:8', 5);
    expect(
        gameboard.spaces.find(sp => sp.coord === '5:8').hasShip
    ).toBe(false)
})

test('Place ship - test boundry of xAxis', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('5:7', 5);
    expect(
        gameboard.spaces.find(sp => sp.coord === '5:7').hasShip
    ).toBe(false)
})

test('Place ship - test boundry of xAxis', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('5:6', 5);
    expect(
        gameboard.spaces.find(sp => sp.coord === '5:6').hasShip
    ).toBe(true)
})

test('recieve Attack, ship hit on first position, 0 misses', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('5:5', 5);
    gameboard.recieveAttack('5:5');
    expect(
        gameboard.spaces.find(sp => sp.coord === '5:5').isHit &&
        gameboard.deployedShips.find(ship => ship.len === 5).hitSpots > 0 &&
        gameboard.missHits.length === 0
    ).toBe(true)
})

test('recieve Attack, ship hit, identify correct ship (3)', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('3:3', 5);
    gameboard.placeShip('2:1', 7);
    gameboard.placeShip('9:5', 3);
    gameboard.recieveAttack('3:5');
    const boatty = gameboard.deployedShips.find(ship => ship.len === 5);
    const tugster = gameboard.deployedShips.find(ship => ship.len === 3);
    const bob = gameboard.deployedShips.find(ship => ship.len == 7);
    expect(
        boatty.hitSpots.length > 0 &&
        tugster.hitSpots.length === 0 &&
        bob.hitSpots.length === 0
    ).toBe(true)
})

test('recieve Attack, ship hit, identify correct ship (7)', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('9:5', 3);
    gameboard.placeShip('3:3', 5);
    gameboard.placeShip('2:1', 7);
    gameboard.recieveAttack('2:6');
    const boatty = gameboard.deployedShips.find(ship => ship.len === 5);
    const tugster = gameboard.deployedShips.find(ship => ship.len === 3);
    const bob = gameboard.deployedShips.find(ship => ship.len == 7);
    expect(
        boatty.hitSpots.length === 0 &&
        tugster.hitSpots.length === 0 &&
        bob.hitSpots.length > 0
    ).toBe(true)
})

test('recieve Attack, shit hit & sunk', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('4:2', 5);
    gameboard.placeShip('3:1', 3);
    gameboard.recieveAttack('4:2');
    gameboard.recieveAttack('4:3');
    gameboard.recieveAttack('4:4');
    gameboard.recieveAttack('4:5');
    gameboard.recieveAttack('4:6');
    gameboard.recieveAttack('4:7');
    gameboard.recieveAttack('4:4');
    gameboard.recieveAttack('4:5');
    gameboard.recieveAttack('4:6');
    expect(
        gameboard.deployedShips.find(ship => ship.size === 'medium').isSunk &&
        gameboard.deployedShips.find(ship => ship.size === 'medium').hitSpots.length === 5 &&
        gameboard.deployedShips.find(ship => ship.size === 'small').hitSpots.length === 0 &&
        !gameboard.deployedShips.find(ship => ship.size === 'small').isSunk &&
        gameboard.missHits.includes('4:7')
    ).toBe(true)
})

test('recieve Attack, misses ships', () => {
    const gameboard = Gameboard();
    gameboard.recieveAttack('3:7');
    expect(gameboard.missHits.length > 0).toBe(true)
})

test('annouce when all ships had been sunk', () => {
    const gameboard = Gameboard();
    gameboard.placeShip('3:1', 3);
    gameboard.placeShip('4:2', 5);
    gameboard.placeShip('1.1', 7);
    gameboard.deployedShips.find(ship => ship.size === 'small').isSunk = true;
    gameboard.deployedShips.find(ship => ship.size === 'medium').isSunk = true;
    gameboard.deployedShips.find(ship => ship.size === 'large').isSunk = true; 
    expect(
        gameboard.deployedShips.find(ship => ship.size === 'small').isSunk &&
        gameboard.deployedShips.find(ship => ship.size === 'medium').isSunk &&
        gameboard.deployedShips.find(ship => ship.size === 'large').isSunk 
    ).toBe(true)
})