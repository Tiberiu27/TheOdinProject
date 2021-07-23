const { Player } = require('../Player');
const { Gameboard } = require('../Gameboard');

test('Player as human attack range', () => {
    const enemyBoard = Gameboard();
    const you = Player(enemyBoard);
    you.attack('3:3')
    you.attack('8:9')
    you.attack('11:10')
    you.attack('5:7')
    you.attack('22:3')
    you.attack('5:7')
    expect(you.hits).toStrictEqual(['3:3', '8:9', '5:7'])
})

test('Player as computer attack range', () => {
    const enemyBoard = Gameboard();
    const comp = Player(enemyBoard);
    comp.isComputer = true;
    for (let i = 0; i < 99; i++) {
        comp.attack();
    }
    expect(comp.hits.length).toBe(99)
})