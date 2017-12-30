const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const decode = () => {
    const token = [...gets().replace(/\d+/g, '')].reverse().join('');

    print(token);
};
decode();
