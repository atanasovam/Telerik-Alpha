const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const englishDigit = () => {
    const convert = (digit) => {
        switch (digit) {
            case '0': return 'zero';
            case '1': return 'one';
            case '2': return 'two';
            case '3': return 'three';
            case '4': return 'four';
            case '5': return 'five';
            case '6': return 'six';
            case '7': return 'seven';
            case '8': return 'eight';
            case '9': return 'nine';
            default: return 'not a digit';
        }
    };

    const args = gets();
    let n = args[0] + '';
    n = Array.from(n);
    const res = convert(n.pop());

    print(res);
};
englishDigit();

