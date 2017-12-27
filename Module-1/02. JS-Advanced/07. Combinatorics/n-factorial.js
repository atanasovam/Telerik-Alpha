const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const printFactorial = () => {
    const factorial = (num) => {
        if (num === 0) {
            return 1;
        }
        return factorial(num - 1) * num;
    };

    const n = +gets();

    const result = factorial(n);
    print(parseInt(result));
};
printFactorial();
