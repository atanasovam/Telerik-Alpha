const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const exchange = (args) => {
    const a = +gets();
    const b = +gets();

    let res = [];
    if (a < b) {
        res = [a, b];
    } else {
        res = [b, a];
    }
    print(res.join(' '));
};
exchange();
