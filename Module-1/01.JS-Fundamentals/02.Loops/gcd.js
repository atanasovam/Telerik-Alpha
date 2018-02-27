const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const printGCD = () => {
    const gcd = (a, b) => {
        if (!b) {
            return a;
        }

        return gcd(b, a % b);
    };

    const [a, b] = gets().split(' ').map(Number);
    const result = gcd(a, b);
    print(result);
};
printGCD();
