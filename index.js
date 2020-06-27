const readline = require('readline-sync');

console.log('Please enter a number:');

const input1 = parseInt(readline.prompt());

console.log('Please enter another number:');

const input2 = parseInt(readline.prompt());

const multiplier = (x, y) => {
    return x * y
}

console.log(multiplier(input1, input2));