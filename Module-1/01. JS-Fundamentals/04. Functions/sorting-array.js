const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const sortArray = () => {
    const numbers = Array.from(gets().split(' ')).map(Number);
    const result = numbers.sort((a, b) => {
        return a - b;
    });

    print(result.join(' '));
};
sortArray();
