const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const printPrettyNums = () => {
    const generateNums = function (p, x,number) {
        if () {

        }
        const left = p * x;
        const right = p * x + 1;

        generateNums(p, left);
        print(left);
        generateNums(right);
        print(right);
    };
    // root -> always = 1;
    const n = +gets(); // p
    const numbersToCheck = gets().split(' ').map(Number);
    const binaryTree = generateNums(n, n, numbersToCheck[0]);
};
printPrettyNums();
