
//logic
function add(first, second) {
    return first + second;
}

function substract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function operate(operator, first, second) {
    switch (operator) {
        case "+":
            return add(first, second);
        case "-":
            return substract(first, second);
        case "x":
            return multiply(first, second);
        case "/":
            return divide(first, second);
        case "=":
            return first;
        default:
            return;
    }
}


//GUI
const container = document.querySelector('#container');
//generating display...
const display = document.createElement('p');
display.setAttribute("id", "display");
display.setAttribute("maxlength", 20);
container.appendChild(display);
//Generating buttons...
const buttonContainer = document.createElement('div');
buttonContainer.setAttribute("id", "buttonContainer");

const buttonsArray = ["7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", "=", "clear", "/"]

for (let i = 0; i < buttonsArray.length; i++) {
    const button = document.createElement('button');
    if (Number.parseInt(buttonsArray[i]) || buttonsArray[i] === "0") { 
        button.setAttribute("id", `num${buttonsArray[i]}`);
        button.setAttribute("class", "digit"); 
    } else {
        button.setAttribute("id", `${buttonsArray[i]}`);
        button.setAttribute("class", "action");
    }
    button.addEventListener('click', (e) => {
        listenToClick(e.target);
    });
    button.textContent = `${buttonsArray[i]}`;
    buttonContainer.appendChild(button);
}

container.appendChild(buttonContainer);

//wiring up js with gui
let currentNumber = '';
let operator = ''
let firstNumber = '';
let secondNumber = '';
function listenToClick(button) {
    if (currentNumber.length > 10 && button.className === 'digit') {
        return;
    }
    
    if (button.className === 'digit' && !firstNumber) {
        currentNumber += button.textContent;
        display.textContent = currentNumber;
    } else if (button.className === 'action' && display.textContent && !firstNumber) {
        firstNumber = Number.parseFloat(currentNumber);
        operator = button.id;
        currentNumber = ''
    } else if (button.className === 'digit' && firstNumber) {
        currentNumber += button.textContent;
        display.textContent = currentNumber;
    } else if (button.className === 'action' && firstNumber) {
        if (button.id === 'clear') {
            currentNumber = '';
            firstNumber = '';
            secondNumber = '';
            operator = '';
            display.textContent = '';
        }

        secondNumber = Number.parseFloat(currentNumber);
        currentNumber = '';
        display.textContent = operate(`${operator}`, firstNumber, secondNumber);
        secondNumber = '';
        firstNumber = Number.parseFloat(display.textContent);
        operator = button.id;
    }

}