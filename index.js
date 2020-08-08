const readline = require('readline-sync');
const { selectMode } = require('./src/userInterface/userInterface')
const { performOneCalculation } = require('./src/calculator/calculator');
const { vowelCounter } = require('./src/vowelCounter');

let again = "";
let mode = "";

console.log('Welcome to the calculator!');

do {
    mode = selectMode();
    if(mode == 1){
        performOneCalculation();
    } else {
        vowelCounter()
    }

    console.log('Another calculation? yes or no');
    again = readline.prompt();
} while (again === "yes")

