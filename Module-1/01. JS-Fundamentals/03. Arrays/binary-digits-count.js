const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const calcDigits = () => {
    const decToBin = (args) => {
        const dec = args;
        const bin = (dec >>> 0).toString(2);
        return bin;
    };
    const countB = (num, b) => {
        let count = 0;
        num = decToBin(num);
        for (const digit of [...num.toString()]) {
            if (+digit === b) {
                count += 1;
            }
        }
        return count;
    };

    const [b, n] = [+gets(), +gets()];
    const numbers = Array.from({ length: n });
    let currSum = 0;

    for (let i = 0; i < n; i += 1) {
        numbers[i] = +gets();
        currSum = countB(numbers[i], b);
        print(currSum);
    }
};
calcDigits();
