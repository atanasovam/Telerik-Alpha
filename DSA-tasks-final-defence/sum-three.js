const tests = require('../gest-print');
const returnedObj = tests();
const [gets, print] = [returnedObj.gets, returnedObj.print];

const [inputRow, inputCol] = gets().split(' ').map((x) => +x);

const matrix = Array.from({ length: inputRow })
    .map((arr) => Array.from({ length: inputCol })
    .fill(0));

for (let r = matrix.length - 1, rowCount = 0; r >= 0; r--, rowCount++) {
    for (let c = 0, value = 3 * rowCount; c < inputCol; c++, value += 3) {
        matrix[r][c] = matrix[r][c] + value;
    }
}

const rightUp = (steps, position) => {
    let counter = 0;
    let currentSteps = 0;
    let [row, col] = position;
    let isValid = true;

    while (currentSteps < +steps && isValid) {
        if (matrix[row][col] !== 'x') {
            counter += matrix[row][col];

            matrix[row][col] = 'x';
        }

        row--; col++;
        currentSteps++;

        isValid = (col >= 0 && col < matrix[0].length) &&
            (row >= 0 && row < matrix.length);
    }

    return [counter, row + 1, col - 1];
};

const leftUp = (steps, position) => {
    let counter = 0;
    let currentSteps = 0;
    let [row, col] = position;
    let isValid = true;

    while (currentSteps < +steps && isValid) {
        if (matrix[row][col] !== 'x') {
            counter += matrix[row][col];

            matrix[row][col] = 'x';
        }

        row--; col--;
        currentSteps++;

        isValid = (col >= 0 && col < matrix[0].length) &&
            (row >= 0 && row < matrix.length);
    }

    return [counter, row + 1, col + 1];
};

const rightDown = (steps, position) => {
    let counter = 0;
    let currentSteps = 0;
    let [row, col] = position;
    let isValid = true;

    while (currentSteps < +steps && isValid) {
        if (matrix[row][col] !== 'x') {
            counter += matrix[row][col];

            matrix[row][col] = 'x';
        }

        row++; col++;
        currentSteps++;

        isValid = (col >= 0 && col < matrix[0].length) &&
            (row >= 0 && row < matrix.length);
    }

    return [counter, row - 1, col - 1];
};

const leftDown = (steps, position) => {
    let counter = 0;
    let currentSteps = 0;
    let [row, col] = position;
    let isValid = true;

    while (currentSteps < +steps && isValid) {
        if (matrix[row][col] !== 'x') {
            counter += matrix[row][col];

            matrix[row][col] = 'x';
        }

        row++; col--;
        currentSteps++;

        isValid = (col >= 0 && col < matrix[0].length) &&
            (row >= 0 && row < matrix.length);
    }

    return [counter, row - 1, col + 1];
};

gets();
let command = gets();
let result = 0;
let position = [matrix.length - 1, 0];
let currentParams = Array.from({ length: 3 });
let direction; let steps;

while (command) {
    [direction, steps] = command.split(' ');

    switch (direction) {
        case 'RU':
        case 'UR':
            currentParams = rightUp(steps, position);

            result += currentParams[0];
            position = [currentParams[1], currentParams[2]];
            break;
        case 'LU':
        case 'UL':
            currentParams = leftUp(steps, position);

            result += currentParams[0];
            position = [currentParams[1], currentParams[2]];
            break;
        case 'DL':
        case 'LD':
            currentParams = leftDown(steps, position);

            result += currentParams[0];
            position = [currentParams[1], currentParams[2]];
            break;
        case 'RD':
        case 'DR':
            currentParams = rightDown(steps, position);

            result += currentParams[0];
            position = [currentParams[1], currentParams[2]];
            break;
        default:
            break;
    }

    command = gets();
}

print(result);
