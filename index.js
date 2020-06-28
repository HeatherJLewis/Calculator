const readline = require('readline-sync');

let answer = 0;
let operandsArray = [];

const createOperandsArray = number => {
    for (let i = 1; i <= number; i++) {
        console.log(`Please enter number ${i}`);
        operandsArray.push(parseInt(readline.prompt()))
    }
    return operandsArray;
}
console.log('Welcome to the calculator!');

console.log('Please enter an operator');

const operator = readline.prompt();

console.log(`You have chosen ${operator} \nHow many numbers would you like?`);

const numberOfOperands = +readline.prompt();

operandsArray = createOperandsArray(numberOfOperands);

const adder = () => {
    operandsArray.forEach(el => answer += el)
    return answer;
};

const multiplier = () => {
    answer = 1;
    operandsArray.forEach(el => answer *= el)
    return answer;
};

switch (operator) {
    case "*":
        multiplier()
        break;

    case "+":
        adder()
        break;

    case "-":
        answer = input1 - input2;
        break;

    case "/":
        answer = input1 / input2;
        break;

    default:
        console.log('We havent made that function yet!');
        break;
}

console.log((!answer) ? 'Try again please' : `The answer is: ${answer}`)