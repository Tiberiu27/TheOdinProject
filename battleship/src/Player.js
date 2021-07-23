const Player = (enemyBoard) => {
    let isComputer = false;
    let hasTurn = false;
    let hits = [];

    const attack = () => {
        let xAxis = Math.floor(Math.random() * 10) + 1;
        let yAxis = Math.floor(Math.random() * 10) + 1;
        let coord = `${yAxis}:${xAxis}`

        if(!enemyBoard.spaces.map(space => space.coord).includes(coord) || hits.includes(coord)) {
            attack();
        } else {
            let square = document.getElementById(`${yAxis}:${xAxis}`)
            square.click();
            obj.hits.push(coord);
        }
    }

    let obj = {
        isComputer,
        hasTurn,
        hits,
        attack
    }

    return obj;
}

module.exports = {
    Player,
}