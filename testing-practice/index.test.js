const { capitalize, reverseString, calculator, Cipher, analyze } = require('./index');


test('Return the first letter capitalized', () => {
    expect(capitalize('caterpillar walks into a bar')).toBe('Caterpillar walks into a bar');
})

test('takes a string and returns it reversed', () => {
    expect(reverseString('caterpillar walks')).toBe('sklaw rallipretac')
})


test('a calculator that performs adds', () => {
    expect(calculator.add(1,2)).toBe(3)
})

test('a calculator that substracts', () => {
    expect(calculator.substract(5,3)).toBe(2)
})

test('a calculator that divides', () => {
    expect(calculator.divide(35,5)).toBe(7)
})

test('a calculator that multiplies', () => {
    expect(calculator.multiply(7,4)).toBe(28)
})

test('Caesar Cipher one word', () => {
    expect(Cipher('milk', 2)).toBe('oknm')
})

test('Caesar Cipher case sensitive', () => {
    expect(Cipher('Dancing, Horse', 1)).toBe('Ebodjoh, Ipstf')
})

test('Caesar Cipher wrapping z to a', () => {
    expect(Cipher('voila, Zorro!', 1)).toBe('wpjmb, Apssp!')
})

test('Caesar Cipher wrapping z to a', () => {
    expect(Cipher('Zanzibar is the place to be afraid.', 5)).toBe('Efsengfw nx ymj uqfhj yt gj fkwfni.')
})

test('Caesar Cipher wrapping z to a', () => {
    expect(Cipher('Zagreb is the capital of Croatia', 13)).toBe('Mntero vf gur pncvgny bs Pebngvn')
})

test('analyze', () => {
    expect(analyze([1,2,3,4,5])).toStrictEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    })
})

test('analyze', () => {
    expect(analyze([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})
