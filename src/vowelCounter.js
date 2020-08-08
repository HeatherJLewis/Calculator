const readline = require('readline-sync');

let vowels = {
    A: 0,
    E: 0,
    I: 0,
    O: 0,
    U: 0
};

let stringForCounting = '';

const vowelCounter = () => {
    console.log('Please enter a string:');
    stringForCounting = readline.prompt();
    arrayOfChars = stringForCounting.toUpperCase().split('');
    arrayOfChars.forEach(char => {
        if( char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
            vowels[char]++;
        }
    });
    console.log(`The vowel counts are:
    A: ${vowels.A}
    E: ${vowels.E}
    I: ${vowels.I}
    O: ${vowels.O}
    U: ${vowels.U}`);



};

module.exports = {
    vowelCounter
}