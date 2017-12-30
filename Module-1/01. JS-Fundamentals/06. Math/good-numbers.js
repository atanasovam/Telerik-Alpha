const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const findGoodNumbers = () => {
    const isGood = (i, n) => {
        while (n > 0) {
            if (i % (n % 10) === 0 || n % 10 === 0) {
                n = Math.floor(n / 10);
            } else {
                return false;
            }
        }
        return true;
    };

    const [a, b] = gets().split(' ').map(Number);
    let result = 0;
    let number = 0;

    for (let i = a; i <= b; i += 1) {
        number = i;
        if (isGood(i, number)) {
            result += 1;
        }
    }
    print(result);
};
findGoodNumbers();
// quit(0);
