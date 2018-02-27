const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const calcMaxSum = () => {
    const n = +gets();
    const numbers = Array.from({ length: n }, (el) => +gets());
    let currMaxSum = 0;
    let maxSum = 0;

    for (let i = 0; i < n; i += 1) {
        currMaxSum += numbers[i];
        maxSum = Math.max(maxSum, currMaxSum);
        if (currMaxSum < 0) {
            currMaxSum = 0;
        }
    }
    print(maxSum);
};
calcMaxSum();
