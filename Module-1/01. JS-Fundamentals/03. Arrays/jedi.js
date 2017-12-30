const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const order = () => {
    const n = +gets();
    const tokens = gets().split(' ');

    const result = [[], [''], ['']];

    for (const token of tokens) {
        if (token[0] === 'M') {
            result[0].push(token);
        }
        if (token[0] === 'K') {
            result[1].push(token);
        }
        if (token[0] === 'P') {
            result[2].push(token);
        }
    }

    let str = '';
    for (const row of result) {
        str += row.join(' ');
    }
    print(str);
};
order();
