const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const comparison = () => {
    const firstStr = gets();
    const secondStr = gets();
    let res = `=`;

    for (let i = 0; i < Math.max(firstStr.length, secondStr.length); i += 1) {
        if (firstStr[i] > secondStr[i]) {
            res = `>`;
            break;
        } else if (firstStr[i] < secondStr[i]) {
            res = `<`;
            break;
        }
    }

    print(res);
};
comparison();
comparison();
