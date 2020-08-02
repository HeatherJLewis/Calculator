const readline = require('readline-sync');
const { selectMode } = require('./services/userInterface')
const { performOneCalculation } = require('./calculator');
const { vowelCounter } = require('./vowelCounter');

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

