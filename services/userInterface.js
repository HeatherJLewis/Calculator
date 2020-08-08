const readline = require('readline-sync');

let userOperator = "";
let numberOfOperands = 0;

const selectAnOperator = () => {
    let operatorArray = ['+', '-', '*', '/']
    console.log('Please enter an operator');
    userOperator = readline.prompt();

    while(!operatorArray.some(operator => operator == userOperator)){
        console.log('That is not a basic operator.\nPlease enter another operator');
        userOperator = readline.prompt();
    }

    return userOperator;

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