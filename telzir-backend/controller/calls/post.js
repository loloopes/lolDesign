module.exports = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        return res.status(200).send('OK!');
    } catch (err) {
        next(err);
    }
};
