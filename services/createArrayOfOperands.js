const readline = require('readline-sync');

const createArrayOfOperands = (number, array) => {
    for (let i = 1; i < number+1; i++) {
        let thing;
        console.log(`Please enter number ${i}`);
        input = parseInt(readline.prompt())

        while(isNaN(input)){
            console.log(`That's not a number. Please enter a number.`);
            input = parseInt(readline.prompt())
        };

        array.push(input);
    }
    return array;
}

module.exports = {
    createArrayOfOperands
}