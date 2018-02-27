const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const increasingSeq = () => {
    const args = gets().shift();
    let current;
    let next;
    let maxSeq = 1;
    let currSeq = 1;

    for (let i = 0; i < args.length; i += 1) {
        current = +args[i];
        next = +args[i + 1];
        if (current < next) {
            currSeq += 1;
        } else {
            currSeq = 1;
        }
        if (currSeq > maxSeq) {
            maxSeq = currSeq;
        }
    }

    print(maxSeq);
};
increasingSeq();
