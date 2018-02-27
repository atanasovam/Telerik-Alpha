const mysql = require('mysql');
const config = require('./config.json');
const sql = require('./sql');

sql.setup(config);

const productsQuery = `
SELECT product_name, standard_cost 
FROM products
ORDER BY standard_cost DESC;`;

const suppliersQuery = `
SELECT 
CONCAT(first_name, ' ', last_name) as full_name 
FROM Suppliers
ORDER BY full_name;`;

const runAsyncAwait = (async () => {
    const productsByCost = await sql.execute(productsQuery);
    console.log(productsByCost);

    const suppliers = await sql.execute(productsQuery);
    console.log(suppliers);
})();

console.log('-'.repeat(50));

const runPromises = (() => {
    sql.execute(productsQuery)
        .then((results) => console.log(results));
})();
