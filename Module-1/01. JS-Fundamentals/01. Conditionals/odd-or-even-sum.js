const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const calculateOddEven = () => {
    const isEven = (num) => {
        if (num % 2 === 0) {
            return true;
        }
        return false;
    };

    const n = +gets();
    const numbers = [];

    for (let i = 0; i < n; i += 1) {
        numbers.push(+gets());
    }

    let evenSum = 1;
    let oddSum = 1;

    for (let i = 0; i < n; i += 1) {
        if (isEven(i + 1)) {
            evenSum *= numbers[i];
            continue;
        } else {
            oddSum *= numbers[i];
        }
    }

    if (oddSum === evenSum) {
        print(`yes ${evenSum}`);
    } else {
        print(`no ${oddSum} ${evenSum}`);
    }
};
calculateOddEven();
