const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;


const calculate = () => {
    // Formula => N! / (K! * (N - K)!)
    const factorial = (num) => {
        if (num === 0) {
            return 1;
        }
        return factorial(num - 1) * num;
    };

    const n = +gets();
    const k = +gets();

    const result = factorial(n) / (factorial(k) * (factorial(n - k)));

    print(result);
};
calculate();
