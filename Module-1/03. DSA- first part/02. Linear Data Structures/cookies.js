const tests = require('./../../../gest-print');
const returnedObj = tests();
const [gets, print] = [returnedObj.gets, returnedObj.print];

const solve = (() => {
    const n = +gets();
    const packages = gets().split(' ').map(Number);
    const packagesMatrix = [];
    let days = 0;

    for (let i = 0; i < packages.length - 1; i++) {
        const a = packages[i];
        const b = packages[i + 1];

        if (a > b) {
            packagesMatrix.push([a, b]);
        } else if (b < packages[i + 2]) {
            packagesMatrix.push([b]);
            i++;
        }

        days++;
    }

    print(days);
})();
