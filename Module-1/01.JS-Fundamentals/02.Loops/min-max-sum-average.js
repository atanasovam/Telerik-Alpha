const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const maxMinAverage = () => {
    const calculate = (numbersArr) => {
        const minNumber = Math.min(...numbersArr);
        const maxNumber = Math.max(...numbersArr);

        const sum = numbersArr.reduce((a, b) => a + b, 0);
        const averageSum = sum / numbersArr.length;

        print('min=' + minNumber.toFixed(2));
        print('max=' + maxNumber.toFixed(2));
        print('sum=' + sum.toFixed(2));
        print('avg=' + averageSum.toFixed(2));
    };

    const tokens = +gets();
    const numbers = [];

    for (let i = 0; i < tokens; i += 1) {
        const currentLine = +gets();
        numbers.push(currentLine);
    }

    calculate(numbers);
};
maxMinAverage();
