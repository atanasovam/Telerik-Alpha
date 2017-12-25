const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const sortNumbers = () => {
    const sort = (numbersArray) => {
        const [a, b, c] = numbersArray.map(Number);
        let first;
        let second;
        let third;

        if (a > b && a > c) {
            first = a;
            if (b > c) {
                second = b;
                third = c;
            } else {
                second = c;
                third = b;
            }
        } else if (b > a && b > c) {
            first = b;
            if (a > c) {
                second = a;
                third = c;
            } else {
                second = c;
                third = a;
            }
        } else if (c > a && c > b) {
            first = c;
            if (a > b) {
                second = a;
                third = b;
            } else {
                second = b;
                third = a;
            }
        } else {
            print(`${a} ${b} ${c}`);
            return;
        }
        print(`${first} ${second} ${third}`);
    };

    const numbers = [];

    for (let i = 0; i < 3; i += 1) {
        const currentLine = +gets();
        numbers.push(currentLine);
    }
    sort(numbers);
};
sortNumbers();
