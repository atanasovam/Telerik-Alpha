const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const cut = (() => {
    const n = +gets();
    let diff;

    const papers = [
        // ['A10', 10],
        ['A9', 9],
        ['A8', 8],
        ['A7', 7],
        ['A6', 6],
        ['A5', 5],
        ['A4', 4],
        ['A3', 3],
        ['A2', 2],
        ['A1', 1],
        ['A0', 0],
    ];

    papers.forEach((token) => {
        diff = 10 - token[1];
    });
})();
