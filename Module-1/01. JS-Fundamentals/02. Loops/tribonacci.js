const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const tribonacci = () => {
    const seq = Array.from({ length: 3 });
    for (let i = 0; i < 3; i += 1) {
        seq[i] = +gets();
    }

    const n = +gets();

    let currSum = 0;
    for (let i = 2; i < n - 1; i += 1) {
        currSum = seq[i] + seq[i - 1] + seq[i - 2];
        seq.push(currSum);
    }

    print(seq.pop());
};
tribonacci();
