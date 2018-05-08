const Queue = require('./structures/queue-without-linked-list');

const tests = require('../gest-print');
const returnedObj = tests();
const [gets, print] = [returnedObj.gets, returnedObj.print];

(() => {
    const [rows, cols] = [+gets(), +gets()];
    const [startRow, startCol] = [+gets(), +gets()];
    let usedRows = rows;
    const resCol = (cols / 2) | 0;

    const matrix = Array.from({ length: rows })
        .map((r, i) => Array.from({ length: cols }, (x) => 0));
    matrix[startRow][startCol] = 1;

    const possibleMoves = new Queue();

    const checkMoves = (r, c) => {
        [
            [r - 1, c - 2],
            [r - 1, c + 2],
            [r - 2, c - 1],
            [r - 2, c + 1],
            [r + 1, c - 2],
            [r + 1, c + 2],
            [r + 2, c + 1],
            [r + 2, c - 1],
        ].forEach((cl) => {
            if (cl[0] >= 0 && cl[0] < rows &&
                cl[1] >= 0 && cl[1] < cols &&
                !matrix[cl[0]][cl[1]]) {
                matrix[cl[0]][cl[1]] = matrix[r][c] + 1;
                possibleMoves.enqueue([cl[0], cl[1]]);

                if (cl[1] === resCol) {
                    usedRows--;
                    if (usedRows === 0) return true;
                }
            }
        });
        return false;
    };


    possibleMoves.enqueue([startRow, startCol]);
    while (!possibleMoves.isEmpty()) {
        const currCell = possibleMoves.dequeue();
        if (checkMoves(currCell[0], currCell[1])) break;
    }

    matrix.forEach((r, i) => print(matrix[i][resCol]));
})();

/* --------------------------------------------------- */
(() => {
    const [rows, cols] = [+gets(), +gets()];
    const start = {
        row: +gets(),
        col: +gets(),
    };

    const resCol = Math.floor(cols / 2);
    const result = Array.from({ length: rows }, (x) => 0);

    const magicCalculation = (r, c) => {
        r = Math.abs(r);
        c = Math.abs(c);

        if (r < c) {
            [r, c] = [c, r];
        }
        if (r === 1 && c === 0) {
            return 3;
        }
        if (r === 2 && c === 2) {
            return 4;
        }

        const delta = r - c;
        if (c > delta) {
            return delta - 2 * Math.floor((delta - c) / 3);
        }
        return delta - 2 * Math.floor((delta - c) / 4);
    };

    Array.from({ length: rows }).forEach((_, i) => {
        const [rowToPrint, colToPrint] = [start.row - i, resCol - start.col];

        result[i] = magicCalculation(rowToPrint, colToPrint) + 1;
    });

    print(result.join('\n'));
})();
