const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const countAppearance = () => {
    const arrLength = +gets();
    const numbers = gets().split(' ').map(Number);
    const number = +gets();
    let count = 0;

    for (const num of numbers) {
        if (num === number) {
            count += 1;
        }
    }

    print(count);
};
countAppearance();
