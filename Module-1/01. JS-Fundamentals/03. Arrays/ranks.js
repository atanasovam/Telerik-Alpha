const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const ranks = () => {
    const n = gets();
    const numbers = gets().split(' ');
    const ordered = numbers.slice().sort((a, b) => b - a);
    const result = [];
    for (let i = 0; i < n; i += 1) {
        result.push(ordered.indexOf(numbers[i]) + 1);
    }
    print(result.join(' '));
};
ranks();
