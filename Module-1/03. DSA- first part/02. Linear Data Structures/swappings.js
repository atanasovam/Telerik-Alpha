const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const makeSwappings = () => {
    const n = +gets();
    const swappingTokens = gets().split(' ').map(Number);

    let numbers = Array.from({ length: n });
    numbers.forEach((el, index) => {
        numbers[index] = index + 1;
    });
    let leftAndRight = Array.from({ length: 2 }, (x) => []);
    swappingTokens.forEach((val, i) => {
        numbers.forEach((num, index) => {
            if (num !== val) {
                if (index < numbers.indexOf(val)) {
                    leftAndRight[0].push(num);
                } else {
                    leftAndRight[1].push(num);
                }
            }
        });
        numbers = [...leftAndRight[1], val, ...leftAndRight[0]];
        leftAndRight = Array.from({ length: 2 }, (x) => []);

        if (i === swappingTokens.length - 1) {
            print(numbers.join(' '));
        }
    });
};
makeSwappings();
