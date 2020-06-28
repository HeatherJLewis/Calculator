const readline = require('readline-sync');

let input1;
let input2;
let answer;

console.log('Welcome to the calculator!');

console.log('Please enter an operator');

const operator = readline.prompt();

const logOperator = () => console.log(`You have chosen ${operator}`);

const askForInput1 = () => {
    console.log('Please enter the first number:');

    return input1 = parseInt(readline.prompt());
};

const askForInput2 = () => {
    console.log('Please enter the second number:');

    return input2 = parseInt(readline.prompt());
};

const multiplier = (x, y) => {
    return x * y
};

const adder = (x, y) => {
    return x + y
};

const subtracter = (x, y) => {
    return x - y
};

const divider = (x, y) => {
    return x / y
};

switch (operator) {
    case "*":
        logOperator()
        askForInput1();
        askForInput2();
        answer = multiplier(input1, input2);
        break;

    case "+":
        logOperator()
        askForInput1();
        askForInput2();
        answer = adder(input1, input2);
        break;

    case "-":
        logOperator()
        askForInput1();
        askForInput2();
        answer = subtracter(input1, input2);
        break;

    case "/":
        logOperator()
        askForInput1();
        askForInput2();
        answer = divider(input1, input2);
        break;

    default:
        console.log('We havent made that function yet!');
        break;
}


console.log((!answer) ? 'Try again please' : `The answer is: ${answer}`)