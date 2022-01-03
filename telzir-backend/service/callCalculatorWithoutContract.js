const prices = require('./prices');

const callCalculatorWithoutContract = (data) => {
    const result = data.reduce((acc, cV) => {
        return [...acc, (cV.min * prices[cV.oriDest])]
    }, [])
    return result;
}

module.exports = { callCalculatorWithoutContract };