const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const maxSum = () => {
    const [n, m] = gets().split(' ').map(Number);
    const matrix = Array.from({ length: n });
    for (let i = 0; i < n; i += 1) {
        matrix[i] = gets().split(' ').map(Number);
    }
    let currentSum = 0;
    let sum = 0;
    for (let row = 0; row < n - 2; row += 1) {
        for (let col = 0; col < m - 2; col += 1) {
            currentSum +=
                matrix[row][col] + matrix[row + 1][col] + matrix[row + 2][col];
            currentSum +=
                matrix[row][col + 1] + matrix[row + 1][col + 1] + matrix[row + 2][col + 1];
            currentSum +=
                matrix[row][col + 2] + matrix[row + 1][col + 2] + matrix[row + 2][col + 2];
            if (currentSum > sum) {
                sum = currentSum;
            }
            currentSum = 0;
        }
    }
    print(sum);
};
maxSum();
