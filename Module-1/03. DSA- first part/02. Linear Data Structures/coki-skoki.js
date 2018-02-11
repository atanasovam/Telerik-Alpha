const tests = require('./../../../gest-print.js');
const Stack = require('./constructors/stack.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const solve = (() => {
    const jump = (currIndex) => {
        for (let j = currIndex + 1; j < buildingsTokens.length; j++) {
            if (buildingsTokens[currIndex] < buildingsTokens[j]) {
                jumps[currIndex] = jumps[j] + 1;
                return;
            }
        }
        return;
    };

    const n = +gets();
    const buildingsTokens = gets().split(' ').map(Number);

    const jumps = Array.from({ length: n }, (x) => 0);

    for (let i = buildingsTokens.length - 2; i >= 0; i--) {
        jump(i);
    }

    print(Math.max(...jumps));
    print(jumps.join(' '));
})();
