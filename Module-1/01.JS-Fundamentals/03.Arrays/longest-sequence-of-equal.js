const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;


const n = +gets();
const inputArr = [];
for (let i = 0; i < n; i += 1) {
    const line = +gets();
    inputArr.push(line);
}

let counter = 1;
let maxCounter = 1;

for (let i = 0; i < inputArr.length - 1; i += 1) {
    let currentNumber = inputArr[i];
    const nextNumber = inputArr[i + 1];

    if (currentNumber === nextNumber) {
        counter += 1;
        if (counter > maxCounter) {
            maxCounter = counter;
        }
    } else {
        counter = 1;
    }
    currentNumber = nextNumber;
}
print(maxCounter);
