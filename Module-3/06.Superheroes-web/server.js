/* globals __dirname */
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const data = require('./data');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(morgan('combined', {
    skip: (req, res) => res.statusCode > 400,
}));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const superheroes = data.getAll();
    const model = {
        superheroes,
    };

    res.render('home', model);
});

app.get('/superheroes', (req, res) => {
    const superheroes = data.getAll();
    const model = { superheroes };

    res.render('superheroes/list', model);
});

app.get('/superheroes/create', (req, res) => {
    res.render('superheroes/create');
});

app.post('/superheroes', (req, res) => {
    const superhero = req.body;
    data.create(superhero);
    res.redirect('/superheroes');
});

app.get('/superheroes/:id', (req, res) => {
    const {
        id,
    } = req.params;

    const superhero = data.getById(+id);

    const model = {
        superhero,
    };

    res.render('superheroes/details', model);
});

app.get('/:name', (req, res) => {
    const name = req.params.name;

    const model = { name };

    res.render('say-name', model);
});

app.listen(3003);
