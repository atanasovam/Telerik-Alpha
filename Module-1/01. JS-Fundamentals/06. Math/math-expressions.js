const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const calulate = () => {
    const calculateExpr = (n, m, p) => {
        const mod = (f, s) => {
            return Math.floor(f % s);
        };

        return (n * n + (1 / (m * p)) + 1337) / (n - (128.523123123 * p))
            + Math.sin(mod(m, 180));
    };
    const [a, b, c] = [+gets(), +gets(), +gets()];

    const result = calculateExpr(a, b, c);
    print(result.toFixed(6));
};
calulate();
