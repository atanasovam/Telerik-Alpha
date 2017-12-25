const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const firstLarger = () => {
    const calculate = () => {
        let index;
        let a;
        let b;
        let c;

        for (let i = 1; i < numbers.length - 1; i += 1) {
            [a, b, c] = [numbers[i - 1], numbers[i], numbers[i + 1]];

            if (a < b && c < b) {
                index = i;
                return index;
            }
        }
        return null;
    };

    const args = gets();
    const numbers = Array.from(args[1].split(' ')).map(Number);
    const result = calculate();

    print(result);
};
firstLarger([
    '6',
    '-26 -25 -28 31 2 27',
]);
