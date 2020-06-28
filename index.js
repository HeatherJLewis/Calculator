const readline = require('readline-sync');

let answer = 0;

console.log('Welcome to the calculator!');

console.log('Please enter an operator');

const operator = readline.prompt();

console.log(`You have chosen ${operator} \nHow many numbers would you like?`);

const numberOfOperands = +readline.prompt();

const adder = number => {
    for(let i = 1; i <= number; i++) {
        console.log(`Please enter number ${i}`);
        answer += (parseInt(readline.prompt()));
    }
    return answer;
};

const multiplier = number => {
    answer = 1;
    for(let i = 1; i <= number; i++) {
        console.log(`Please enter number ${i}`);
        answer *= (parseInt(readline.prompt()));
    }
    return answer;
};

switch (operator) {
    case "*":
        multiplier(numberOfOperands)
        break;

    case "+":
        adder(numberOfOperands)
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