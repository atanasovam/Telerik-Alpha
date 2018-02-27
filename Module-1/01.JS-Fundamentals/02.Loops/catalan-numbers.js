const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const catalanNumbers = (n) => {
    if (n === 0) {
        return 1;
    }

    return (4 * n - 2) * catalanNumbers(n - 1) / (n + 1);
};

const n = +gets();

print(catalanNumbers(n));

