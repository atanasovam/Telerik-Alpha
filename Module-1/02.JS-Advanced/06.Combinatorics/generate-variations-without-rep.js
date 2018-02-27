const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

// without 'used' -> variations with repetitions
const printAllVariations = () => {
    const generateVariations = (n, k, index, variation, used, allVariations) => {
        if (index === k) {
            allVariations.push([...variation]);
            return;
        }

        for (let i = 0; i < n; i += 1) {
            if (used[i]) {
                continue;
            }

            variation[index] = i + 1;
            used[i] = true;
            generateVariations(n, k, index + 1, variation, used, allVariations);
            used[i] = false;
        }
    };

    const n = +gets();
    const k = n;
    const variation = Array.from({ length: k });
    const used = Array.from({ length: n });
    const allVariations = [];

    generateVariations(n, k, 0, variation, used, allVariations);

    allVariations.forEach((currVariation) => print(currVariation.join(' ')));
};
printAllVariations();

