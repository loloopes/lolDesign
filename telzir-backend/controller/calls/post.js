const { callCalculatorWithContract } = require('../../service/callCalculatorWithContract');
const { callCalculatorWithoutContract } = require('../../service/callCalculatorWithoutContract');

module.exports = async (req, res, next) => {
    try {
        const callData = req.body;

        const data = {
            withContract: callCalculatorWithContract(callData),
            withoutContract: callCalculatorWithoutContract(callData)
        }
        return res.status(200).json(data);
    } catch (err) {
        next(err);
    }
};
