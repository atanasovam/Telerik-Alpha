const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const largestNumber = () => {
    const getMax = (a, b) => {
        return Math.max(a, b);
    };

    const args = gets();
    const [f, s, t] =
        Array.from(args[0]
            .split(' ')
            .map(Number));

    print(getMax(getMax(f, s), t));
};
largestNumber();
