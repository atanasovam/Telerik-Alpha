const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const associative = () => {
    const str = gets()
        .split(/[ !,]/)
        .filter((x) => x);

    const result = {};

    for (const word of str) {
        if (typeof result[word] === 'undefined') {
            result[word] = 0;
        }
    }
    print(str);
};
associative();
// solve(['hi kj, acsdc! me You you Me hi ']);
