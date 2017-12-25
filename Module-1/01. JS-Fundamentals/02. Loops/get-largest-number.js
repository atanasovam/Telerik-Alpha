const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const getLagrest = () => {
    const getMax = (a, b) => {
        if (a < b) {
            return b;
        }
        return a;
    };
    const numbers = gets().split(' ').map(Number);
    let maxNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < numbers.length - 1; i += 1) {
        const current = numbers[i];
        const next = numbers[i + 1];
        const currMax = getMax(current, next);
        if (currMax > maxNum) {
            maxNum = currMax;
        }
    }
    print(maxNum);
};
getLagrest();
