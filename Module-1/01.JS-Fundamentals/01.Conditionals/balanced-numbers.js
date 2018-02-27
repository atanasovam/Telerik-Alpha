const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const getBalancedNumber = (() => {
    const sumArr = (array) => {
        return array.map(Number).reduce((a, b) => a + b);
    };

    let firstDigit; let lastDigit; let second; let result;

    let n = gets();
    const balanced = [];

    while (n !== undefined) {
        lastDigit = n[n.length - 1];
        firstDigit = n[0];
        second = +n[1];

        const sum = +lastDigit + +firstDigit;

        if ((+lastDigit + +firstDigit) === second) {
            balanced.push(n);
        } else {
            result = sumArr(balanced);
            break;
        }
        n = gets();
    }

    print(result);
})();
