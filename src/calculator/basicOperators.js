let result = 0

const addNumbers = (array) => {
    const reducer = (acc, curr) => acc + curr;
    result = array.reduce(reducer)
    return result;
};

const multiplyNumbers = (array) => {
    const reducer = (acc, curr) => acc * curr;
    result = array.reduce(reducer)
    return result;
};

const divideNumbers = (array) => {
    const reducer = (acc, curr) => {
        return curr != 0 ? acc / curr : acc;
    }
    result = array.reduce(reducer)
    return result;
};

const subtractNumbers = (array) => {
    const reducer = (acc, curr) => acc - curr;
    result = array.reduce(reducer)
    return result;
};

module.exports = {
    addNumbers,
    multiplyNumbers,
    divideNumbers,
    subtractNumbers
}