const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const quadronacci = () => {
    const generateQuadronacci = (rows, cols, a, b, c, d) => {
        let q = 0;
        let sequence = [a, b, c, d];

        for (let i = 4, j = 4; i <= rows * cols; i += 1, j += 1) {
            if (j === cols) {
                print(sequence.join(' '));
                sequence = [];
                j = 0;
            }
            q = a + b + c + d;
            a = b; b = c; c = d; d = q;
            sequence.push(q);
        }
        return;
    };
    const seq = Array.from({ length: 4 }, (x) => +gets());
    const rows = +gets();
    const cols = +gets();

    generateQuadronacci(rows, cols, seq[0], seq[1], seq[2], seq[3]);
    // print(rectangle);
};
quadronacci();
