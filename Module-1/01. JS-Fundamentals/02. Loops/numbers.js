const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const printNumbers = () => {
    const n = +gets();
    const res = [];
    for (let i = 1; i <= n; i += 1) {
        res.push(i);
    }
    print(res.join(' '));
};
printNumbers();
