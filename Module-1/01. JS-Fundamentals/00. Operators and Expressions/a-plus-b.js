const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const calculateSumPerGroup = (args) => {
    const n = +gets();

    for (let i = 0; i < n; i += 1) {
        let currentSum = 0;
        const currPair = gets().split(' ').map(Number);

        for (const number of currPair) {
            currentSum += number;
        }
        print(currentSum);
    }
};
calculateSumPerGroup();
