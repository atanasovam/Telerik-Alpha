const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const getPrevDay = (() => {
    let [y, m, d] = [gets(), gets(), gets()].map(Number);
    const date = new Date(y, m - 1, d - 1).toDateString().split(' ');

    [m, d, y] = [date[1], date[2], date[3]];

    print(`${d}-${m}-${y}`);
})();
