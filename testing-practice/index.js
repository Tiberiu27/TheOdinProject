function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
    let newStr = '';
    for(let i = 1; i <= str.length; i++) {
        newStr += str[str.length - i];
    }
    return newStr;
}

const calculator = {
    add: function(a, b) {
        return a + b;
    },

    substract: function(a, b) {
        return a - b;
    },

    divide: function(a, b) {
        return a / b;
    },

    multiply: function(a, b) {
        return a * b;
    }
}

const Cipher = (() => {
    const letters = {
        0: 'a',
        1: 'b',
        2: 'c',
        3: 'd',
        4: 'e',
        5: 'f',
        6: 'g',
        7: 'h',
        8: 'i',
        9: 'j',
        10: 'k',
        11: 'l',
        12: 'm',
        13: 'n',
        14: 'o',
        15: 'p',
        16: 'q',
        17: 'r',
        18: 's',
        19: 't',
        20: 'u',
        21: 'v',
        22: 'w',
        23: 'x',
        24: 'y',
        25: 'z'
    }

    const findLetterIndex = (char) => {
        return Number(Object.keys(letters).find(letter => letters[letter] === char));
    }

    const checkAlpha = (char, offset) => {
        char = char.toLowerCase();
        if(Object.values(letters).includes(char)) {
            let index = findLetterIndex(char);
            return letters[checkIndexLimit(index, offset)];
        } else {
            return char;
        }
    }

    const checkIndexLimit = (index, offset) => {
        if (index === 25) {
            return offset - 1;
        } else if (index + offset > 25) {
            return index + offset - 26;
        } else {
            return index + offset;
        }
    }

    const caesar = (str, offset) => {
        let newStr = '';
        for(let i = 0; i < str.length; i++) {
            if (str[i] === str[i].toUpperCase()) {
                newStr += checkAlpha(str[i], offset).toUpperCase();
            } else {
                newStr += checkAlpha(str[i], offset);
            }
        }
        return newStr;
    }

    return caesar;
})();

    const analyze = (args) => {
        return {
            average: args.reduce((total, current) => total + current, 0) / args.length,   
            length: args.length,
            max: Math.max(...args),
            min: Math.min(...args)
        }
    }


module.exports = {
    capitalize,
    reverseString,
    calculator, 
    Cipher,
    analyze
};