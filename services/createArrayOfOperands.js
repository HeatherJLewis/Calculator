const readline = require('readline-sync');

const createArrayOfOperands = (number, array) => {
    for (let i = 1; i < number+1; i++) {
            console.log(`Please enter number ${i}`);
            array.push(parseInt(readline.prompt()));
    }
    return array;
}

module.exports = {
    createArrayOfOperands
}