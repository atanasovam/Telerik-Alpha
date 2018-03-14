const express = require('express');

const { getAll } = require('./data');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const superheroes = getAll();
    const model = {
        superheroes,
    };

    res.render('home', model);
});

app.listen(3003);
