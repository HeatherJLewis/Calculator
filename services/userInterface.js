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

module.exports = {
    selectAnOperator,
    selectNumberOfOperands
};