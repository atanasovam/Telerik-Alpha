const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const sum = () => {
    const add = (a, b) => {
        if ((a | 0) == 0 && (b | 0) == 0) {
            return '0';
        }

        a = a.split('').reverse();
        b = b.split('').reverse();
        const result = [];

        for (let i = 0; (a[i] >= 0) || (b[i] >= 0); i++) {
            const sum = (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0);

            if (!result[i]) {
                result[i] = 0;
            }

            const next = ((result[i] + sum) / 10) | 0;
            result[i] = (result[i] + sum) % 10;

            if (next) {
                result[i + 1] = next;
            }
        }

        return result.reverse().join('');
    };

    const [n, m] = gets();
    const arr1 = gets().split(' ').join('');
    const arr2 = gets().split(' ').join('');

    const result = add(arr1, arr2);
    print(result);
};
sum();
