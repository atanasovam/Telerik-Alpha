const superheroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Batman2',
    },
    {
        id: 3,
        name: 'Batman4',
    },
    {
        id: 4,
        name: 'Batman6',
    },
    {
        id: 5,
        name: 'Batman3',
    },
];

let lastId = 5;

const getAll = () => {
    return superheroes;
};

const getById = (id) => {
    const filterById = (hero) => hero.id === id;
    return superheroes.find(filterById);
};

const create = (superhero) => {
    superhero.id = (lastId += 1);

    superheroes.push(superhero);
};

module.exports = {
    getAll,
    getById,
    create,
};
