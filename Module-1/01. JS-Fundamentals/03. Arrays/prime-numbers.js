const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const prime = () => {
    const isPrime = (num) => {
        const currentNumber = Math.sqrt(num);

        for (let i = 2; i <= currentNumber; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        if (currentNumber === 0 || currentNumber === 1) {
            return false;
        }
        return true;
    };

    const n = +gets();

    for (let i = n - 1; i >= 0; i -= 1) {
        if (isPrime(i)) {
            print(i);
            return;
        }
    }
};
prime();
