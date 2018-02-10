const tests = require('./../../../gest-print.js');
const Stack = require('./constructors/stack.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const solve = (() => {
    const jump = (currIndx) => {
        let el = buildingsTokens[currIndx];
        let count = 0;

        for (let i = currIndx; i < buildingsTokens.length; i++) {
            if (el < buildingsTokens[i + 1]) {
                count++;
                el = buildingsTokens[i + 1];
            }
        }

        return count;
    };

    const n = +gets();
    const buildingsTokens = gets().split(' ').map(Number);

    const jumps = [];

    buildingsTokens.forEach((token, inx) => {
        jumps.push(jump(inx));
    });

    print(Math.max(...jumps));
    print(jumps.join(' '));
})();
