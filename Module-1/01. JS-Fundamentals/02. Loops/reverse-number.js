const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const reverseNumbers = () => {
    let n = gets();
    n = [...n].reverse().join('');
    print(n);
};
reverseNumbers();

