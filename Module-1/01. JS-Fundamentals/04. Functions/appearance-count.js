const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const appearanceCount = () => {
    const args = gets();
    let arr = args[1];
    const patt = args[2];
    let counter = 0;
    arr = Array.from(arr.split(' '));

    for (const d of arr) {
        if (d === patt) {
            counter += 1;
        }
    }

    print(counter);
};
appearanceCount();
