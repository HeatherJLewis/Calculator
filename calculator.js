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
    try {
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
        }
    } catch (error) {
        console.error(error);
    }

    console.log((answer === undefined) ? 'Try again please' : `The answer is: ${answer}`);

};

module.exports = {
    performOneCalculation
}