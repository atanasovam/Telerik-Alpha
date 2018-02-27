
const {
    MongoClient,
} = require('mongodb');

const run = (async () => {
    const client = await MongoClient.connect('mongodb://localhost');
    const db = client.db('superhero');
})();

