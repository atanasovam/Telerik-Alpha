const tests = require('./../../../gest-print.js');
const Queue = require('./constructors/queue');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const calculate = (() => {
    const isEnd = (index, number) => {
        if (index === m) {
            print(number);
            return true;
        }
        return false;
    };

    const [n, m] = gets().split(' ').map(Number);

    const sNumbers = new Queue();
    sNumbers.enqueue(n);

    let i = 1;

    while (true) {
        const token = +sNumbers.dequeue();
        const [f, s, t] = [token + 1, token * 2 + 1, token + 2];

        if (isEnd(++i, f)) {
            return;
        }

        if (isEnd(++i, s)) {
            return;
        }

        if (isEnd(++i, t)) {
            return;
        }

        sNumbers.enqueue(f, s, t);
    }
})();
