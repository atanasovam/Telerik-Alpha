const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const calculate = () => {
    const factorial = (num) => {
        if (num === 0) {
            return 1;
        }
        return factorial(num - 1) * num;
    };

    const n = +gets();
    const x = +gets();
    let sum = (1 / x) + 1;

    for (let i = 2; i <= n; i += 1) {
        sum += (factorial(i)) / (x ** i);
    }
    print(sum.toFixed(5));
};
calculate();
