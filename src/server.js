const express = require('express');
const routes = require('./routes');
const path = require('path');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.use(express.static(path.join(__dirname, '/../public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/index.html'))
});

app.listen(3001);