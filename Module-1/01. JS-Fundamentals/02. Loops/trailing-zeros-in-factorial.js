const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const countZeroes = () => {
    const n = +gets();
    let count = 0;

    for (let i = 5; n / i >= 1; i *= 5) {
        count += Math.floor(n / i);
    }
    print(count);
};
countZeroes();
