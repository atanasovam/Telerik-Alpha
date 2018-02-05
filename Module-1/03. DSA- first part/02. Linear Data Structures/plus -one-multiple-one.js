const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;


const calculate = (() => {
    const [n, m] = gets().split(' ').map(Number);

    const numbers = [n];
    let i = 0;

    while (numbers.length < m) {
        const token = numbers[i];
        const [f, s, t] = [token + 1, token * 2 + 1, token + 2];
        numbers.push(f, s, t);
        i++;
    }
    print(numbers[m - 1]);
})();
