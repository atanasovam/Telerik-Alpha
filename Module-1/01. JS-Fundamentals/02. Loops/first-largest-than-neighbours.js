const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const findFirstLargest = () => {
    const [n, numbers] = [+gets(), gets().split(' ').map(Number)];
    let firstLargestIndx = -1;

    for (let i = 0; i < n - 2; i += 1) {
        if (numbers[i] < numbers[i + 1] && numbers[i + 1] > numbers[i + 2]) {
            firstLargestIndx = numbers.indexOf(numbers[i + 1]);
            break;
        }
    }

    if (firstLargestIndx > -1) {
        print(firstLargestIndx);
        return;
    }
    print(-1);
};
findFirstLargest();
