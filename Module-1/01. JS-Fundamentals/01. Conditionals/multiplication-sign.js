const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const getSign = () => {
    const x = +gets();
    const y = +gets();
    const z = +gets();

    if (x > 0 && y > 0 && z > 0) {
        print('+');
    } else if (x === 0 || y === 0 || z === 0) {
        print('0');
    } else if (x < 0 && y < 0 && z < 0) {
        print('-');
    } else if (x > 0 && y < 0 && z < 0) {
        print('+');
    } else if (x < 0 && y > 0 && z < 0) {
        print('+');
    } else if (x < 0 && y < 0 && z > 0) {
        print('+');
    } else {
        print('-');
    }
};
getSign();
