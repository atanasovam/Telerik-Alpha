const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const solve = () => {
    const input = gets();
    let value = gets();

    switch (input) {
        case 'integer': value = Number(value) + 1;
            break;
        case 'real':
            value = Number(value);
            value = (value + 1).toFixed(2);
            break;
        case 'text': value += '*';
            break;
        default:
            break;
    }
    print(value);
};
solve();
