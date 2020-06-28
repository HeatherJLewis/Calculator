const readline = require('readline-sync');
const { addNumbers,
        multiplyNumbers,
        divideNumbers,
        subtractNumbers } = require('./services/basicOperators')
const userInterface = require('./services/userInterface')
const { createArrayOfOperands } = require('./services/createArrayOfOperands')

let arrayOfOperands = [];
let chosenOperator = "";
let again = "";

console.log('Welcome to the calculator!');

do {
    chosenOperator = userInterface.selectAnOperator();

    arrayOfOperands = createArrayOfOperands(userInterface.selectNumberOfOperands(), arrayOfOperands);

    switch (chosenOperator) {
        case "*":
            answer = multiplyNumbers(arrayOfOperands)
            break;

        case "+":
            answer = addNumbers(arrayOfOperands)
            break;

        case "-":
            answer = subtractNumbers(arrayOfOperands)
            break;

        case "/":
            answer = divideNumbers(arrayOfOperands)
            break;

        default:
            console.log('We havent made that function yet!');
            break;
    }

    console.log((!answer) ? 'Try again please' : `The answer is: ${answer}`)
    console.log('Another calculation? yes or no');
    again = readline.prompt();
} while (again === "yes")

