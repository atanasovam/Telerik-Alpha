const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const solve = () => {
    const calcBiggestNumber = (numbersArray) => {
        let biggestNumberIndex = 0;
        let biggestN = -Infinity;
        const biggest = {};
        numbersArray = numbersArray.map(Number);

        for (let i = 0; i < numbersArray.length; i += 1) {
            if (numbersArray[i] > biggestN && numbersArray[i] > -1) {
                biggestN = numbersArray[i];
                biggestNumberIndex = i;
                biggest[biggestN] = biggestNumberIndex;
            }
        }
        if (biggestN === 0) {
            return 0;
        }

        biggestN = Object.keys(biggest).pop();
        biggestNumberIndex = biggest[biggestN];
        switch (biggestNumberIndex) {
            case 0: return 'left';
            case 1: return 'right';
            case 2: return 'up';
            case 3: return 'down';
            default: break;
        }
    };
    const move = function(row, col, matrixArea, resultSum, position) {
        let biggestN = 0;
        /*eslint-disable */
        do {
            const left = (function() {
                if (typeof (matrixArea[row][col - 1]) === 'undefined') {
                    return -1;
                } else if (matrixArea[row][col - 1] === 0) {
                    return 0;
                }
                return matrixArea[row][col - 1];
            }());
            const right = (function() {
                if (typeof (matrixArea[row][col + 1]) === 'undefined') {
                    return -1;
                } else if (matrixArea[row][col + 1] === 0) {
                    return 0;
                }
                return matrixArea[row][col + 1];
            }());
            const up = (function() {
                if (typeof (matrixArea[row - 1]) === 'undefined') {
                    return -1;
                } else if (matrixArea[row - 1][col] === 0) {
                    return 0;
                }
                return matrixArea[row - 1][col];
            }());
            const down = (function() {
                if (typeof (matrixArea[row + 1]) === 'undefined') {
                    return -1;
                } else if (matrixArea[row + 1][col] === 0) {
                    return 0;
                }
                return matrixArea[row + 1][col];
            }());

            biggestN = calcBiggestNumber([left, right, up, down]);
            switch (biggestN) {
                case 'left':
                    if (left > 0) {
                        resultSum += 1;
                        matrixArea[row][col - 1] -= 1;
                        col -= 1;
                    }
                    break;
                case 'right':
                    if (right > 0) {
                        resultSum += 1;
                        matrixArea[row][col + 1] -= 1;
                        col += 1;
                    }
                    break;
                case 'up':
                    if (up > 0) {
                        resultSum += 1;
                        matrixArea[row - 1][col] -= 1;
                        row -= 1;
                    }
                    break;
                case 'down':
                    if (down > 0) {
                        resultSum += 1;
                        matrixArea[row + 1][col] -= 1;
                        row += 1;
                    }
                    break;
                default:
                    break;
            }
        } while (biggestN !== 0);
        /* eslint-enable */
        print(resultSum);
    };

    const [n, m] = gets().split(' ').map(Number);
    const matrixArea = Array.from({ length: n });
    let start;
    const resultSum = 0;

    for (let row = 0; row < n; row += 1) {
        const currentLine = gets().split(' ').map(Number);
        const col = currentLine.indexOf(0);

        if (col !== -1) {
            start = [row, col];
        }
        matrixArea[row] = (currentLine);
    }
    move(start[0], start[1], matrixArea, resultSum);
};
solve();
