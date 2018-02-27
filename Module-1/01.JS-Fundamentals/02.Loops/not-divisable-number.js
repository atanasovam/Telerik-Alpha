const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const getNotDivisableNumbers = (args) => {
    const result = (number) => {
        const notDivisableNumbers = [];

        for (let i = 1; i <= number; i += 1) {
            if (i % 3 !== 0 && i % 7 !== 0) {
                notDivisableNumbers.push(i);
            }
        }
        return notDivisableNumbers.join(' ');
    };
    const n = Number(gets());
    print(result(n));
};
getNotDivisableNumbers();
