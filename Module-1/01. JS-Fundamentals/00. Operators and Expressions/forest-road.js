const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const printRoad = () => {
    const n = +gets();
    let line;
    for (let i = 0; i < n; i += 1) {
        line = '.'.repeat(i) + '*' + '.'.repeat(n - i - 1);
        print(line);
    }
    for (let i = 1; i < n; i += 1) {
        line = '.'.repeat(n - i - 1) + '*' + '.'.repeat(i);
        print(line);
    }
};
printRoad();

