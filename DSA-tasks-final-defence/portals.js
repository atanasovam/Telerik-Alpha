const tests = require('../gest-print');
const returnedObj = tests();
const [gets, print] = [returnedObj.gets, returnedObj.print];

const [startRow, startCol] = gets().split(' ').map(Number);
const [row, col] = gets().split(' ');
let bestSum = 0;

const matrix = (() => {
    const result = Array.from({ length: row });
    result.forEach((line, indx) => {
        result[indx] = gets()
            .split(' ')
            .map((x) => {
                if (x === '#') {
                    return [x, true];
                }
                return [+x, false];
            });
    });

    return result;
})();

const validateCells = {
    isValidUpMove: (currentRow, steps) => currentRow - steps >= 0,
    isValidDownMove: (currentRow, steps) => currentRow + steps < row,
    isValidLeftMove: (currentCol, steps) => currentCol - steps >= 0,
    isValidRightMove: (currentCol, steps) => currentCol + steps < col,
};

const move = (r, c, currentSum) => {
    const isValidCell = (rl, cl) => {
        const nextEl = matrix[rl][cl][0];

        if (nextEl[0] === '#') return false; // if tupi jabi
        else if (nextEl[1]) return false; // if visited

        matrix[r][c][1] = true;

        return true;
    };

    if (bestSum < currentSum) bestSum = currentSum;
    if (matrix[r][c][1]) return; // if visited-> continue

    const steps = matrix[r][c][0];

    if (validateCells.isValidDownMove(r, steps)) {
        if (isValidCell(r + steps, c)) move(r + steps, c, currentSum + steps);
    }

    if (validateCells.isValidUpMove(r, steps)) {
        if (isValidCell(r - steps, c)) move(r - steps, c, currentSum + steps);
    }

    if (validateCells.isValidRightMove(c, steps)) {
        if (isValidCell(r, c + steps)) move(r, c + steps, currentSum + steps);
    }

    if (validateCells.isValidLeftMove(c, steps)) {
        if (isValidCell(r, c - steps)) move(r, c - steps, currentSum + steps);
    }

    matrix[r][c][1] = false;
};

move(startRow, startCol, 0);

print(bestSum);
