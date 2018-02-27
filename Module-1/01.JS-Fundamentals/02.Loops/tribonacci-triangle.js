const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const printTribonacciTriangle = () => {
    const getNextFib = (a, b, c) => {
        const f = a + b + c;
        a = b;
        b = c;
        c = f;
        return [a, b, c, f];
    };
    let f = +gets();
    let s = +gets();
    let t = +gets();
    const length = +gets();
    let tribonacci = 0;
    let seq = [f, s, t];
    let result = '';

    for (let row = 0; row < length; row += 1) {
        for (let col = 0; col < row + 1; col += 1) {
            [f, s, t, tribonacci] = getNextFib(f, s, t);
            seq.push(tribonacci);
            result += `${seq.shift()} `;
        }
        print(result.trim());
        result = '';
        seq = [];
    }
};
printTribonacciTriangle();
