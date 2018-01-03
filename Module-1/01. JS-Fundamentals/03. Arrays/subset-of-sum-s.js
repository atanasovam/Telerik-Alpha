const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const printSum = () => {
    const calculate = (arr, n) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i += 1) {
            for (let j = i; j < arr.length; j += 1) {
                if (sum === n) {
                    return 'yes';
                } else if (sum > n) {
                    sum = 0;
                    break;
                }
                sum += arr[j];
            }
        }
        return 'no';
    };

    const num = +gets();
    const numbers = gets().split(' ').map(Number);

    const result = calculate(numbers, num);
    print(result);
};
printSum();
