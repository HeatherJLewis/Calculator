const basicOperators = require('./services/basicOperators')
const userInterface = require('./services/userInterface')
const createArrayOfOperands = require('./services/createArrayOfOperands')

let arrayOfOperands = [];
let chosenOperator = "";

console.log('Welcome to the calculator!');

chosenOperator = userInterface.selectAnOperator();

arrayOfOperands = createArrayOfOperands.createArrayOfOperands(userInterface.selectNumberOfOperands(), arrayOfOperands);

switch (chosenOperator) {
    case "*":
        answer = basicOperators.multiplyNumbers(arrayOfOperands)
        break;

    case "+":
        answer = basicOperators.addNumbers(arrayOfOperands)
        break;

    case "-":
        answer = basicOperators.subtractNumbers(arrayOfOperands)
        break;

    case "/":
        answer = basicOperators.divideNumbers(arrayOfOperands)
        break;

    default:
        console.log('We havent made that function yet!');
        break;
}

console.log((!answer) ? 'Try again please' : `The answer is: ${answer}`)