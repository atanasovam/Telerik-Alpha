const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const printFactorial = () => {
    const multiply = (a, b) => {
        if (+a === 0 || +b === 0) {
            return '0';
        }

        a = a.split('').reverse();
        b = b.split('').reverse();
        const result = [];

        for (let i = 0; a[i] >= 0; i++) {
            for (let j = 0; b[j] >= 0; j++) {
                if (!result[i + j]) {
                    result[i + j] = 0;
                }

                result[i + j] += a[i] * b[j];
            }
        }

        for (let i = 0; result[i] >= 0; i++) {
            if (result[i] >= 10) {
                if (!result[i + 1]) {
                    result[i + 1] = 0;
                }

                result[i + 1] += (result[i] / 10)|0;
                result[i] %= 10;
            }
        }

        return result.reverse().join('');
    };

    const n = +gets();
    let result = '1';

    for (let i = 1; i <= n; i += 1) {
        result = multiply(result, i.toString());
    }
    print(result);
};
printFactorial();
