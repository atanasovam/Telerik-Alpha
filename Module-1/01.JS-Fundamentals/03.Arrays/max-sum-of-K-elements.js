const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const getMaxSum = () => {
    const n = +gets();
    const k = +gets();
    const sequence = [];
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sequence.push(+gets());
    }

    for (let i = 0; i < k; i += 1) {
        const currentMax = Math.max(...sequence);
        sequence.splice(sequence.indexOf(currentMax), 1);
        sum += currentMax;
    }
    print(sum);
};
getMaxSum();
