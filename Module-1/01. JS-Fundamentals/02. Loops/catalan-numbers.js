const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const catalanNumbers = () => {
    const factorial = (num) => {
        if (num === 0) {
            return 1;
        }
        return factorial(num - 1) * num;
    };
    const n = +gets();
    const catalanN = factorial(2 * n) / (factorial(n + 1) * factorial(n));
    // const catalanN = (1 / (n + 1)) * ((2 * n) / n);

    print(catalanN);
};
catalanNumbers();
