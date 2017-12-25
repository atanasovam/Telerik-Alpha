const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const findBiggestNumber = () => {
    const calculate = (numbersArray) => {
        let biggestNumber = -Infinity;
        numbersArray = numbersArray.map(Number);

        numbersArray.forEach(function(e) {
            if (e > biggestNumber) {
                biggestNumber = e;
            }
        });

        print(biggestNumber);
    };

    const numbers = [];

    for (let i = 0; i < 3; i += 1) {
        const currentLine = +gets();
        numbers.push(currentLine);
    }

    calculate(numbers);
};
findBiggestNumber();
