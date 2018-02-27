const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const printMatrix = () => {
    const n = +gets();
    const matrix = [];

    for (let rows = 1; rows <= n; rows += 1) {
        matrix.push([rows]);
    }

    for (const row of matrix) {
        for (let i = row[0] + 1, j = 1; j < n; i += 1, j += 1) {
            row.push(i);
        }
    }
    matrix.map((e) => print(e.join(' ')));
};
printMatrix();
