const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const getMaxNumber = () => {
    const [d1, d2, d3] = gets().split('').map(Number);
    const results = [
        d1 + d2 + d3,
        d1 + d2 * d3,
        d1 * d2 + d3,
        d1 * d2 * d3,
    ];

    results.sort((a, b) => a < b);
    print(results[0]);
};
getMaxNumber();
