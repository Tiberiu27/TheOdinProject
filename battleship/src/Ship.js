const Ship = (len) => {
    let hitSpots = [];
    let isSunk = false;
    let size;

    const hit = (spot) => {
        if (obj.isSunk) {
            return
        }

        obj.hitSpots.push(spot)
        if (obj.hitSpots.length === obj.len) {
            obj.isSunk = true;
        }
    };

    switch(len) {
        case 3:
            size = 'small';
            break;
        case 5:
            size = 'medium';
            break;
        case 7:
            size = 'large';
            break
    }

    const obj =  {
        len,
        isSunk,
        size,
        hitSpots,
        hit,
    }

    return obj;
}

module.exports = {
    Ship,
};
