const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const binarySearch = () => {
    const args = gets().shift();
    const x = args.pop();
    print(args.indexOf(x));
};
binarySearch(['5', '1', '2', '4', '8', '16']);
