const express = require('express');
const calls = require('./calls/router');

const root = express.Router();

root.use('/calculator', calls);

module.exports = root;