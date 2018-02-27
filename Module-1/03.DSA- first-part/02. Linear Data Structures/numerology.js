const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const solve = (() => {
    const makeMagic = (a, b) => (+a + +b) * (+a ^ +b) % 10;
    const divine = (digits) => {
        if (digits.length === 1) {
            digitsCount[digits[0]]++;
            return;
        }

        for (let i = 1; i < digits.length; i++) {
            const [a, b] = [digits[i - 1], digits[i]];

            digits.splice(i, 1);
            digits[i - 1] = makeMagic(a, b);
            divine(digits);
            digits[i - 1] = a;
            digits.splice(i, 0, b);
        }
    };
    const tokens = Array.from(gets());
    const digitsCount = Array.from({ length: 10 }, (x) => 0);

    divine(tokens);

    print(digitsCount.join(' '));
})();
