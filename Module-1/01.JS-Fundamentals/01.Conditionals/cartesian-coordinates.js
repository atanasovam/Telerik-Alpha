const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const printPoint = () => {
    const getPart = (x, y) => {
        if (x > 0) {
            if (y > 0) {
                return 1;
            } else if (y < 0) {
                return 4;
            }
            return 6;
        } else if (x < 0) {
            if (y > 0) {
                return 2;
            } else if (y < 0) {
                return 3;
            }
            return 6;
        } else if (x === 0) {
            if (y > 0 || y < 0) {
                return 5;
            }
            return 0;
        }
        return 5;
    };

    const [x, y] = [gets(), gets()].map(Number);
    const result = getPart(x, y);

    print(result);
};
printPoint();
