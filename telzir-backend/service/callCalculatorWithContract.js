const prices = require('./prices');

const callCalculatorWithContract = (data) => {
	const result = data.reduce((acc, cV) => {
			if (cV.contract === 'FaleMais30') {
				const minimumValue = cV.min - 30;
				const total = minimumValue * prices[cV.oriDest];
				return [...acc, Math.max(total, 0)]
			}
			if (cV.contract === 'FaleMais60') {
				const minimumValue = cV.min - 60;
				const total = minimumValue * prices[cV.oriDest];
				return [...acc, Math.max(total, 0)]
			}
			if (cV.contract === 'FaleMais120') {
				const minimumValue = cV.min - 120;
				const total = minimumValue * prices[cV.oriDest];
				return [...acc, Math.max(total, 0)]
			}
			return acc;
	}, [])
	return result;
}

module.exports = { callCalculatorWithContract };
