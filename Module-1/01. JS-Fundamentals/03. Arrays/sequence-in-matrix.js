const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const getLongestSequence = () => {
    const longestSequenceOfEqual = (array) => {
        let counter = 1;
        let longestSequence = 1;

        for (let i = 0; i < array.length - 1; i += 1) {
            let currentNumber = array[i];
            const nextNumber = array[i + 1];

            if (currentNumber === nextNumber) {
                counter += 1;
                if (counter > longestSequence) {
                    longestSequence = counter;
                }
            } else {
                counter = 1;
            }
            currentNumber = nextNumber;
        }
        return longestSequence;
    };

    const calculateBiggest = (numbersArray) => {
        let biggestNumber = -Infinity;
        numbersArray = numbersArray.map(Number);

        numbersArray.forEach(function(e) {
            if (e > biggestNumber) {
                biggestNumber = e;
            }
        });

        return biggestNumber;
    };

    const [n, rowLength] = gets().split(' ').map(Number);
    const matrix = [];

    let horizontalMax = 0;
    for (let row = 0; row < n; row += 1) {
        const currentRow = gets().split(' ');
        matrix.push(currentRow);

        const currentHorizontalMax = longestSequenceOfEqual(currentRow);

        if (currentHorizontalMax > horizontalMax) {
            horizontalMax = currentHorizontalMax;
        }
    }

    let verticalMax = 0;
    for (let col = 0; col < rowLength; col += 1) {
        const currentCol = [];

        for (let row = 0; row < matrix.length; row += 1) {
            const currentElement = matrix[row][col];
            currentCol.push(currentElement);
        }

        const currentVerticalMax = longestSequenceOfEqual(currentCol);
        if (currentVerticalMax > verticalMax) {
            verticalMax = currentVerticalMax;
        }
    }

    let firstDiagonalMax = 0;
    for (let row = 0; row < matrix.length; row += 1) {
        let realIndex = row;
        const currentDiagonal = [];
        let start = 0;

        // for each element for current D
        while (realIndex < matrix.length) {
            const currElement = matrix[realIndex][start];
            currentDiagonal.push(currElement);

            start += 1;
            realIndex += 1;
        }

        const currentDiagonalMax = longestSequenceOfEqual(currentDiagonal);
        if (currentDiagonalMax > firstDiagonalMax) {
            firstDiagonalMax = currentDiagonalMax;
        }
    }

    for (let col = 1; col < rowLength; col += 1) {
        let realIndexCol = col;
        const currentDiagonal = [];
        let start = 0;

        while (matrix[start][realIndexCol]) {
            const currElement = matrix[start][realIndexCol];
            currentDiagonal.push(currElement);

            start += 1;
            realIndexCol += 1;
        }

        const currentDiagonalMax = longestSequenceOfEqual(currentDiagonal);
        if (currentDiagonalMax > firstDiagonalMax) {
            firstDiagonalMax = currentDiagonalMax;
        }
    }

    let secondVerticalMax = 0;
    for (let row = 0; row < matrix.length; row += 1) {
        let realRowIndex = row;
        let startIndex = rowLength - 1;
        const currentDiagonal = [];

        // const element = matrix[realRowIndex][startIndex];
        while (startIndex >= 0 && realRowIndex < rowLength) {
            const currElement =
                matrix[realRowIndex][startIndex];
            currentDiagonal.push(currElement);
            realRowIndex += 1;
            startIndex -= 1;
        }

        const currentDiagonalMax = longestSequenceOfEqual(currentDiagonal);
        if (currentDiagonalMax > secondVerticalMax) {
            secondVerticalMax = currentDiagonalMax;
        }
    }

    for (let col = rowLength - 1, row = 0; col >= 0; col += 1, row += 1) {
        const currentDiagonal = [];
        let realRow = row;

        while (realRow < rowLength) {
            const currElement = matrix[realRow][col - realRow];
            currentDiagonal.push(currElement);
            realRow += 1;
        }
        if (currentDiagonal.length === 1) {
            break;
        }
        const currentDiagonalMax = longestSequenceOfEqual(currentDiagonal);
        if (currentDiagonalMax > secondVerticalMax) {
            secondVerticalMax = currentDiagonalMax;
        }
    }

    const max = calculateBiggest([
        horizontalMax, verticalMax, firstDiagonalMax, secondVerticalMax,
    ]);
    print(max);
};
getLongestSequence();
// quit(0);
