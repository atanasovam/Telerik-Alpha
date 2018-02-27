const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const sumOfPolynomials = () => {
    const [n, f, s] = [
        +gets(),
        gets().split(' ').map((x) => +x),
        gets().split(' ').map((x) => +x),
    ];

    const result = Array.from({ length: n });

    for (let i = 0; i < n; i += 1) {
        result[i] = f[i] + s[i];
    }

    print(result.join(' '));
};
sumOfPolynomials();
