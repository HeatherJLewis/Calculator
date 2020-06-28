let result = 0

const addNumbers = (array) => {
    result = array[0]
    array.slice(1).forEach(el => result += el)
    return result;
};

const multiplyNumbers = (array) => {
    result = array[0]
    array.slice(1).forEach(el => result *= el)
    return result;
};

const divideNumbers = (array) => {
    result = array[0]
    array.slice(1).forEach(el => result /= el)
    return result;
};

const subtractNumbers = (array) => {
    result = array[0]
    array.slice(1).forEach(el => result -= el)
    return result;
};

module.exports = {
    addNumbers,
    multiplyNumbers,
    divideNumbers,
    subtractNumbers
}