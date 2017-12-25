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
    const k = +gets();
    const result = Math.round(factorial(n) / factorial(k));

    print(result);
};
calculate();
