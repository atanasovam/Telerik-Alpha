const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const makeSpiralMatrix = (() => {
    const moveRight = () => {
        while (startCol < matrix.length && isNaN(matrix[startRow][startCol])) {
            matrix[startRow][startCol] = number++;
            startCol++;
        }
        startRow++;
        return;
    };

    const moveLeft = () => {
        startRow--;
        startCol -= 2;

        while (startCol >= 0 && isNaN(matrix[startRow][startCol])) {
            matrix[startRow][startCol] = number++;
            startCol--;
        }
        startCol++;
        startRow--;
        return;
    };

    const moveDown = () => {
        startCol--;
        while (startRow < matrix.length && isNaN(matrix[startRow][startCol])) {
            matrix[startRow][startCol] = number++;
            startRow++;
        }
        startCol++;
        return;
    };

    const moveUp = () => {
        while (startRow >= 0 && isNaN(matrix[startRow][startCol])) {
            matrix[startRow][startCol] = number++;
            startRow--;
        }
        startCol++;
        startRow++;
        return;
    };

    const n = +gets();
    const matrix = Array.from({ length: n }, (x) => Array.from({ length: n }));

    let number = 1;
    let startRow = 0; let startCol = 0;

    while (number <= n ** 2) {
        moveRight();
        if (number === n ** 2 + 1) {
            return matrix;
        }
        moveDown();
        if (number === n ** 2 + 1) {
            return matrix;
        }
        moveLeft();
        if (number === n ** 2 + 1) {
            return matrix;
        }
        moveUp();
    }
    return matrix;
})();

makeSpiralMatrix.forEach((r) => print(r.join(' ')));
