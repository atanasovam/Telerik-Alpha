const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const solve = (() => {
    const tokens = gets().split('').map(Number);
    const result = [];

    for (let i = 0; i < tokens.length - 1; i++) {
        const [a, b] = [tokens[i], tokens[i + 1]];

        result.push((a + b) * (a ^ b) % 10);
    }

    print(result);
})();
