const readline = require('readline-sync');

let userOperator = "";
let numberOfOperands = 0;
let userMode;

const selectAnOperator = () => {
    const validOperators = ['+', '-', '*', '/']
    console.log('Please enter an operator');
    userOperator = readline.prompt();

    while(!validOperators.some(operator => operator == userOperator)){
        console.log('That is not a basic operator.\nPlease enter another operator');
        userOperator = readline.prompt();
    }

    return userOperator;

}

const selectNumberOfOperands = () => {
    console.log(`You have chosen ${userOperator} \nHow many numbers would you like?`);

   numberOfOperands = +readline.prompt();

   while(Number.isNaN(numberOfOperands)){
    console.log('That is not a numerical value.\nPlease enter another number');
    numberOfOperands = +readline.prompt();
   }

   return numberOfOperands;
};

const selectMode = () => {
    const validModes = [1, 2];
    console.log('Which calculator mode would you like?\n 1) Arithmetic \n 2) Vowel Counting');
    userMode = readline.prompt();

    while(!validModes.some(mode => mode == userMode)){
        console.log('That is not a valid mode.\nPlease enter another mode');
        userMode = readline.prompt();
    }

    return userMode;
}

module.exports = {
    selectMode,
    selectAnOperator,
    selectNumberOfOperands
};