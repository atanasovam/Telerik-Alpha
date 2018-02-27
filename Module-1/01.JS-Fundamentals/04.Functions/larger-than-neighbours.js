const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const largerNeighbours = () => {
    const calculate = () => {
        let sum = 0;
        let a;
        let b;
        let c;

        for (let i = 1; i < numbers.length - 1; i += 1) {
            [a, b, c] = [numbers[i - 1], numbers[i], numbers[i + 1]];

            if (a < b && c < b) {
                sum += 1;
            }
        }
        return sum;
    };
    const args = gets();
    const numbers = Array.from(args[1].split(' ')).map(Number);

    const result = calculate();

    print(result);
};
largerNeighbours();
