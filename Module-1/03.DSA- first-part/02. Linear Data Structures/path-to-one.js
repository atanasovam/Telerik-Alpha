const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const getShortestPath = () => {
    let n = +gets();
    let count = 0;

    do {
        if (n % 2 === 0) {
            n = n / 2;
        } else if ((n % 4) === 1 || n === 3) {
            n -= 1;
        } else {
            n += 1;
        }
        count += 1;
    } while (n > 1);

    print(count);
};
getShortestPath();
