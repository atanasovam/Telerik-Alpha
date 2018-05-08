const tests = require('../gest-print');
const returnedObj = tests();
const [gets, print] = [returnedObj.gets, returnedObj.print];

const [rows] = [+gets(), +gets()];

const matrix = Array.from({ length: 3 });
for (let i = 0; i < rows; i++) {
    matrix[i] = gets();
}

const converter = {
    row: (val) => rows - +val[1],
    col: (val) => val[0].charCodeAt() - 'a'.charCodeAt(),
    element: (val) => matrix[converter.row(val)][converter.col(val)],
};

const moveRook = (player1, player2) => {
    if (converter.col(player1) !== converter.col(player2)) {
        const diff = converter.col(player1) < converter.col(player2) ? -1 : 1;

        for (let i = converter.col(player2); i !== converter.col(player1); i += diff) {
            if (matrix[converter.row(player1)][i] !== '-') {
                print('no');
                return;
            }
        }

        print('yes');
    } else {
        const diff = converter.row(player1) < converter.row(player2) ? -1 : 1;

        for (let i = converter.row(player2); i !== converter.row(player1); i += diff) {
            if (matrix[i][converter.col(player1)] !== '-') {
                print('no');
                return;
            }
        }

        print('yes');
    }
};

const moveBishop = (player1, player2) => {
    const diff1 = converter.row(player1) < converter.row(player2) ? -1 : 1;
    const diff2 = converter.col(player1) < converter.col(player2) ? -1 : 1;

    for (let r = converter.row(player2),
        c = converter.col(player2);
        r !== converter.row(player1);
        r += diff1, c += diff2) {
        if (matrix[r][c] !== '-') {
            print('no');
            return;
        }
    }

    print('yes');
};

const commandsCount = gets();

for (let i = 0; i < commandsCount; i++) {
    const [p1, p2] = gets().split(' ');
    const player = converter.element(p1);
    const isValidDiagonalMove =
        Math.abs(converter.row(p1) - converter.row(p2))
        === Math.abs(converter.col(p1) - converter.col(p2));

    if (converter.element(p1) === '-' || p1 === p2) {
        print('no');
        continue;
    }

    if (converter.row(p1) === converter.row(p2) ||
        converter.col(p1) === converter.col(p2)) {
        if (player === 'R' || player === 'Q') {
            moveRook(p1, p2);
        } else {
            print('no');
        }
    } else if (isValidDiagonalMove) {
        if (player === 'B' || player === 'Q') {
            moveBishop(p1, p2);
        } else {
            print('no');
        }
    } else {
        print('no');
    }
}
