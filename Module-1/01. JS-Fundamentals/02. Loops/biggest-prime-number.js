const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;


const bestPrime = (args) => {
    const isPrime = (number) => {
        const n = Math.sqrt(number);

        for (let i = 2; i <= n; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        if (n === 0 || n === 1) {
            return false;
        }
        return true;
    };

    const num = +gets();
    let biggestPrime;

    for (let i = num; i >= 0; i -= 1) {
        if (isPrime(i)) {
            biggestPrime = i;
            break;
        }
    }
    print(biggestPrime);
};

bestPrime();
