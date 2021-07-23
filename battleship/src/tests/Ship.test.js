const { Ship } = require('../Ship');

test('the ship object propreties exist', () => {
    expect(Ship(5, false)).toMatchObject(
        {
            len: 5,
            isSunk: false,
        }
    )
})

test('ship hit method', () => {
    const boatty = Ship(5)
    boatty.hit(5)
    expect(boatty).toMatchObject({
        hitSpots: [5],
        len: 5,
        isSunk: false
    })
})

test('sinking the boat', () => {
    const boatty = Ship(5)
    boatty.hit(1)
    boatty.hit(2)
    boatty.hit(3)
    boatty.hit(4)
    boatty.hit(5)
    expect(boatty).toMatchObject({
        hitSpots: [1, 2, 3, 4, 5],
        len: 5,
        isSunk: true
    })
})

test('sinking the boat', () => {
    const boatty = Ship(7)
    boatty.hit(1)
    boatty.hit(3)
    boatty.hit(5)
    boatty.hit(2)
    boatty.hit(4)
    boatty.hit(6)
    boatty.hit(7)
    boatty.hit(8)
    expect(boatty).toMatchObject({
        hitSpots: [1, 3, 5, 2, 4, 6, 7],
        len: 7,
        isSunk: true
    })
})
