const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const solve = (() => {
    const move = (r, c, currCoordinates) => {
        let currSum = 0;

        const moveCol = (() => {
            currSum += currCoordinates[1]
        })();

        const moveRow = (() => {

        })();


        return currSum;
    };

    const [row, col] = [gets(), gets()].map(Number);
    const moves = +gets();

    const coordinates = gets().split(' ').map(Number);
    const currPosition = {
        row: [row - 1, 0]
    };// [row - 1, 0]; // row | col
    let sum = 0;

    for (let i = 0; i < moves; i++) {
        const coef = Math.max(row, col);
        const [currR, currC] = [
            coordinates[i] | 0 / coef,
            (coordinates[i] % coef) | 0,
        ];

        sum += move(currR, currC, currPosition);
        [currPosition[0], currPosition[1]] = [currR, currC];
    }

    print(sum);
})();
