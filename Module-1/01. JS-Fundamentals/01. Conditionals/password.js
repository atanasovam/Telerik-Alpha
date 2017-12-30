const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const findPass = () => {
    const [n, k] = gets().split(' ');
    let reversedN = [...n];
    const length = n.length - 1;

    for (let i = 0; i < 4; i += 1) {
        [reversedN[i], reversedN[length - i]] = [n[length - i], n[i]];
    }
    reversedN = Number(reversedN.join(''));
    const reminder = reversedN % +k;
    const quotient = Math.floor(reversedN / +k);
    const result = quotient + reminder;
    print(result);
};
findPass();
