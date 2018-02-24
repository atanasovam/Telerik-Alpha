const tests = require('./../../gest-print');
const returnedObj = tests();
const [gets, print] = [returnedObj.gets, returnedObj.print];

const solve = (() => {
    const moveRow = (r, c, isPositive) => {
        let currSum = 0;

        if (isPositive) {
            for (let i = 0; i < c; i++) {
                currSum += +matrix[r - 1][i];
            }
            return currSum;
        }
        for (let i = matrix[r - 1].length - 1; i >= c - 1; i--) {
            currSum += +matrix[r - 1][i];
        }

        return currSum;
    };

    const moveCol = (r, c, isPositive) => {
        let currSum = 0;

        if (isPositive) {
            for (let i = r - 1; i > 0; i--) {
                currSum += matrix[i - 1][c - 1];
            }
            return currSum;
        }

        for (let i = r; i < n; i++) {
            currSum += matrix[i][c - 1];
        }
        return currSum;
    };

    const n = +gets();
    const matrix = Array.from({ length: n }, (x) => gets().split(' ').map(Number));

    const coordinatesTokens = gets().split(' ');
    const coordinates = Array.from({ length: coordinatesTokens.length / 2 }, (x) => []);
    let matrixCounter = 0;

    coordinatesTokens.forEach((el, index) => {
        if (index % 2 === 0) {
            coordinates[matrixCounter][0] = +el;
        } else {
            coordinates[matrixCounter][1] = +el;
            matrixCounter++;
        }
    });

    let row; let col;
    const sums = Array.from({ length: coordinates.length });

    coordinates.forEach((el, index) => {
        const [rPositive, cPositive] = [el[0] >= 0, el[1] >= 0];

        el = el.map((e) => {
            if (e < 0) {
                return e * (-1);
            }
            return e;
        });

        [row, col] = [el[0], el[1]];
        sums[index] = moveRow(row, col, rPositive);
        sums[index] += moveCol(row, col, cPositive);
    });

    print(Math.max(...sums));
})();
