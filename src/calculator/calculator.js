const {
    selectAnOperator,
    selectNumberOfOperands
} = require('./services/userInterface')
const { createArrayOfOperands } = require('./services/createArrayOfOperands');
const { addNumbers,
    multiplyNumbers,
    divideNumbers,
    subtractNumbers } = require('./services/basicOperators')

let chosenOperator = "";

const performOneCalculation = () => {
    let answer;
    let arrayOfOperands = [];

    chosenOperator = selectAnOperator();

    arrayOfOperands = createArrayOfOperands(selectNumberOfOperands(), arrayOfOperands);

    switch (chosenOperator) {
        case "*":
            answer = multiplyNumbers(arrayOfOperands);
            break;

        case "+":
            answer = addNumbers(arrayOfOperands);
            break;

        case "-":
            answer = subtractNumbers(arrayOfOperands);
            break;

        case "/":
            answer = divideNumbers(arrayOfOperands);
            break;
        default:
            console.log('That is not a function');
            break;
    }

    console.log((!answer) ? 'Try again please' : `The answer is: ${answer}`);

};

module.exports = {
    performOneCalculation
}