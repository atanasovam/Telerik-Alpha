const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const printTrapezoid = () => {
    const n = +gets();
    const bottom = '*'.repeat(2 * n);
    const height = n + 1;
    const top = '.'.repeat(n) + '*'.repeat(n);
    const middle = Array.from({ length: n - 1 });

    for (let i = 0; i < height - 2; i += 1) {
        middle[i] = ['.'.repeat(n - i - 1) + '*' + '.'.repeat(n + i - 1) + '*'];
    }
    print(top);
    print(middle.join('\n'));
    print(bottom);
};
printTrapezoid();
