const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const run = (() => {
    const printCurrentDirection = (odd, even) => {
        let result = '';

        if (even > odd) {
            result = 'left';
        } else if (even < odd) {
            result = 'right';
        } else {
            result = 'straight';
        }

        print(result);
    };

    const n = +gets();
    const numbers = Array.from({ length: n }, (x) => gets());
    const sums = Array.from({ length: n }, (x) => [0, 0]); // odd, even

    numbers.forEach((num, i) => {
        [...num].forEach((digit) => {
            if (digit % 2 === 0) {
                sums[i][1] += +digit;
            } else {
                sums[i][0] += +digit;
            }
        });

        printCurrentDirection(sums[i][0], sums[i][1]);
    });
})();
