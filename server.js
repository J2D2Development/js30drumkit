'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const hostname = '127.0.0.1';
const port = 3001;

const app = express();

app.use('/static', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, hostname, () => {
    console.log('server running at port', port);
});