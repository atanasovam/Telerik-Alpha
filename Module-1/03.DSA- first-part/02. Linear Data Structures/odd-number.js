/* globals Map, Object */

const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const solve = (() => {
    const n = +gets();
    const tokensObj = {};

    for (let i = 0; i < n; i++) {
        const key = gets();

        if (tokensObj[key]) {
            tokensObj[key] += 1;
        } else {
            tokensObj[key] = 1;
        }
    }

    for (const k in tokensObj) {
        if (tokensObj[k] % 2 !== 0) {
            print(k);
        }
    }
})();
