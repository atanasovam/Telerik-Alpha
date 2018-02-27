const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

// Calculate the sum of values below the main diagonal

const calculateSum = () => {
    const matrix = [
        [1, 2, 3, 4, 5],
        [2, 1, 4, 5, 6],
        [3, 4, 1, 6, 7],
        [4, 5, 6, 1, 8],
        [5, 6, 7, 8, 1],
    ];
    let sum = 0;

    // sum the elements before row + 1
    for (let row = 1; row < matrix.length; row += 1) {
        for (let col = 0; col < row; col += 1) {
            const currentNumber = matrix[row][col];
            sum += currentNumber;
        }
    }

    print(sum);
};
calculateSum();
