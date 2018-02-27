const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;


const getMaxIncreasingSeq = () => {
    const n = +gets();
    const sequence = [];

    for (let i = 0; i < n; i += 1) {
        const line = +gets();
        sequence.push(line);
    }
    sequence.map(Number);
    let maxLength = 1;
    let currLength = 1;
    let nextN;
    let currentN;

    for (let i = 0; i < sequence.length - 1; i += 1) {
        currentN = sequence[i];
        nextN = sequence[i + 1];

        if (currentN < nextN) {
            currLength += 1;
            if (currLength > maxLength) {
                maxLength = currLength;
            }
        } else {
            currLength = 1;
        }
    }

    print(maxLength);
};
getMaxIncreasingSeq(+gets());
