const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const maxSequence = () => {
    let currMax = 1;
    const maxSeq = [];
    let next;
    let current;

    const args = gets().reverse();
    args.pop();
    args.reverse();

    for (let i = args.length - 1; i > 0; i -= 1) {
        current = args[i].trim();
        next = args[i - 1].trim();

        if (next === current) {
            currMax += 1;
        } else {
            maxSeq.push(currMax);
            currMax = 1;
        }
    }
    maxSeq.push(currMax);

    const result = maxSeq.sort().pop();
    print(result);
};
maxSequence();
