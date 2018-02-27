const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const n = +gets();
let result = '';

for (let i = n + 1; i <= n + 10; i++) {
    result += i + '\n';
}
print(result);
