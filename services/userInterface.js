const readline = require('readline-sync');

let userOperator = "";
let numberOfOperands = 0;

const selectAnOperator = () => {
    let operatorArray = ['+', '-', '*', '/']
    console.log('Please enter an operator');

    userOperator = readline.prompt();

    if(operatorArray.some(operator => operator == userOperator)){
        return userOperator;
    } else {
        throw new Error('This is not a basic operator')
    };
}

const selectNumberOfOperands = () => {
    try {
        console.log(`You have chosen ${userOperator} \nHow many numbers would you like?`);

        return numberOfOperands = +readline.prompt();
    } catch (error) {
        console.error(error);
    }
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