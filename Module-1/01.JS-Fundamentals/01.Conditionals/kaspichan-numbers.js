const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const encode = (() => {
    const n = +gets();

    const alphabetLower =
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const alphabetUpper = alphabetLower.map((x) => x.toUpperCase());

    let encoded = '';

    if (n > 25) {
        encoded += alphabetLower[(n / 26 | 0) - 1];
        let start = n;
        const getStart = () => {
            if (start % 26 === 0) {
                return start;
            }
            return getStart(start--);
        };
        getStart();
        const diff = n - start;
        encoded += alphabetUpper[diff];
    } else {
        encoded += alphabetUpper[n];
    }

    print(encoded);
})();
