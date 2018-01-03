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
        return num * factorial(num - 1);
    };

    const n = +gets();
    const k = +gets();

    let result = 0;
    for (let i = 0; i <= n; i += 1) {
        result += (factorial(i)) / (k ** i);
    }

    print(result.toFixed());
};
calculate();
