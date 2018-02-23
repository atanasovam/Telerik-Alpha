const config = require('./config.json');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config);

const Superhero = sequelize.define('superhero', {
    name: Sequelize.STRING,
    secretIdentity: Sequelize.STRING,
    powerLevel: Sequelize.INTEGER,
});

const runDB = (async () => {
    const superhero = {
        name: 'Batman',
        secretIdentity: 'Ssdssd Ggdfsd',
        powerLevel: 3,
    };

    await sequelize.sync();
    await Superhero.create(superhero);

    (await Superhero.findAll())
        .forEach((el) => console.log(el));
})();
