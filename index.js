const readline = require('readline-sync');

let answer;

console.log('Welcome to the calculator!');

console.log('Please enter an operator');

const operator = readline.prompt();

console.log(`You have chosen ${operator}`);

console.log('Please enter the first number:');

const input1 = parseInt(readline.prompt());

console.log('Please enter the second number:');

const input2 = parseInt(readline.prompt());

switch (operator) {
    case "*":
        answer = input1 * input2;
        break;

    case "+":
        answer = input1 + input2;
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