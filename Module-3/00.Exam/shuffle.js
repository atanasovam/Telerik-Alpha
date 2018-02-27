const tests = require('./../../gest-print');
const returnedObj = tests();
const [gets, print] = [returnedObj.gets, returnedObj.print];

const solve = (() => {
    const move = (numberToSwap) => {
        const isOdd = numberToSwap % 2 !== 0;
        let numberToSwapAfter;

        if (isOdd) {
            numberToSwapAfter = numberToSwap * 2;
        } else {
            numberToSwapAfter = numberToSwap / 2;
        }

        numbers.splice(numbers.indexOf(numberToSwap), 1);
        let updatedIndex = numbers.indexOf(numberToSwapAfter);

        if (updatedIndex === -1) {
            return;
        } else if (numberToSwap === n) {
            return;
        }
        if (numberToSwapAfter > n) {
            print(numberToSwapAfter);
            numbers.splice(n - 1, 0, numberToSwap);
        } else {
            if (numbers.indexOf(numberToSwap) < numbers.indexOf(numberToSwapAfter)) {
                updatedIndex += 1;
            }
            numbers.splice(updatedIndex, 0, numberToSwap);
        }
        return;
    };

    const [n, k] = gets().split(' ').map(Number);
    const numbersToSwap = gets().split(' ').map(Number);

    let i = 1;
    const numbers = Array.from({ length: n }, (x) => {
        return i++;
    });

    numbersToSwap.forEach((el, index) => {
        move(el);
    });

    print(numbers.join(' '));
})();
