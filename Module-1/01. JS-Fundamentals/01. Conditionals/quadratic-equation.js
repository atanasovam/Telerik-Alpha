const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const solve = (args) => {
    const calc = () => {
        if (d === 0) {
            return `x1=x2=${(-(b) / (2 * a)).toFixed(2)}`;
        }
        const x1 = ((-b) - Math.sqrt(d)) / (2 * a);
        const x2 = ((-b) + Math.sqrt(d)) / (2 * a);

        return `x1=${x1.toFixed(2)}; x2=${x2.toFixed(2)}`;
    };
    const [a, b, c] = args.map(Number);
    let res = '';

    const d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        res = 'no real roots';
    }

    res = calc();
    return res;
};
solve(['2', '5', '-3']);
solve(['-1', '3', '0']);
solve(['-0.5', '4', '-8']);
solve(['5', '2', '8']);
solve(['0.2', '9.572', '0.2']);
