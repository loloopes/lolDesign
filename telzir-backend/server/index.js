const express = require('express');
const cors = require('cors');
const root = require('../controller/router');

const app = express();

app.use(express.json());
app.use(cors());
// app.get('/ping', (req, res) => res.status(200).send('Pong!'));
app.use(root);


app.listen(3001, () => console.log('server running on 3001'));
