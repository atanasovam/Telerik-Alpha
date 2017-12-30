const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const leastMajority = () => {
    const numbers = Array.from({ length: 5 });
    for (let i = 0; i < 5; i += 1) {
        numbers[i] = +gets();
    }

    const a = numbers[0];
    const b = numbers[1];
    const c = numbers[2];
    const d = numbers[3];
    const e = numbers[4];


    for (let i = 1; i; i++) {
        let count = 0;
        if (i % a === 0) {
            count++;
        }
        if (i % b === 0) {
            count++;
        }
        if (i % c === 0) {
            count++;
        }
        if (i % d === 0) {
            count++;
        }
        if (i % e === 0) {
            count++;
        }
        if (count >= 3) {
            print(i);
            break;
        }
    }
};
leastMajority();
