const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const correctBrackets = () => {
    const str = gets();

    const countLeft = str.match(/\(/g).length;
    const countRight = str.match(/\)/g).length;
    if (countLeft === countRight) {
        return 'Correct';
    }
    return 'Incorrect';
};
correctBrackets();
