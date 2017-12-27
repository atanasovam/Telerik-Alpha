const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const calcLargest = () => {
    const [n, numbers] = [+gets(), gets().split(' ').map(Number)];
    let count = 0;

    for (let i = 0; i < n - 2; i += 1) {
        if (numbers[i] < numbers[i + 1] && numbers[i + 1] > numbers[i + 2]) {
            count += 1;
        }
    }

    print(count);
};
calcLargest();
