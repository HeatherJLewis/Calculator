const readline = require('readline-sync');

let operator = "";
let numberOfOperands = 0;

const selectAnOperator = () => {
    console.log('Please enter an operator');

    return operator = readline.prompt();
};

const selectNumberOfOperands = () => {
    console.log(`You have chosen ${operator} \nHow many numbers would you like?`);

    return numberOfOperands = +readline.prompt();
};

const selectMode = () => {
    console.log('Which calculator mode would you like?\n 1) Arithmetic \n 2) Vowel Counting');

    return readline.prompt();
}

module.exports = {
    selectMode,
    selectAnOperator,
    selectNumberOfOperands
};