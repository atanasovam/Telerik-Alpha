const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const mostFrequent = () => {
    const tokens = +gets();
    const numbers = [];
    let key;
    let value = 0;

    for (let i = 0; i < tokens; i += 1) {
        numbers.push(+gets());
    }

    for (let i = 0; i < numbers.length; i += 1) {
        let currentMax = 0;

        for (let j = 0; j < numbers.length; j += 1) {
            if (numbers[i] === numbers[j]) {
                currentMax += 1;
                if (currentMax > value) {
                    value = currentMax;
                    key = numbers[i];
                }
            }
        }
    }
    print(`${key} (${value} times)`);
};
mostFrequent();
// quit(0);