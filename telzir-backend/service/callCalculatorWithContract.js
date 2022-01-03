const prices = require('./prices');

const callCalculatorWithContract = (data) => {
    const result = data.reduce((acc, cV) => {
        if (cV.plan === 'FaleMais30') {
            return [...acc, ((cV.min - 30) * prices[cV.oriDest])]
        }
        if (cV.plan === 'Falemais60') {
            return [...acc, ((cV.min - 60) * prices[cV.oriDest])]
        }
        if (cV.plan === 'FaleMais120') {
            return [...acc, ((cV.min - 120) * prices[cV.oriDest])]
        }
        return acc;
    }, [])
    return result;
}

module.exports = { callCalculatorWithContract };