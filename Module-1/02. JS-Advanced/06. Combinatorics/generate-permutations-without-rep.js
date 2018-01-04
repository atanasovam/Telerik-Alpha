const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

// without 'used' -> permutations with repetitions
const printPermutations = () => {
    const generatePermutations = (n, index, used, permutation) => {
        if (index === n) {
            print(permutation.join(' '));
            return;
        }

        for (let i = 0; i < n; i += 1) {
            if (used[i]) {
                continue;
            }

            permutation[index] = i + 1;
            used[i] = true;
            generatePermutations(n, index + 1, used, permutation);
            used[i] = false;
        }
    };

    const n = +gets();
    const used = Array.from({ length: n });
    const permutation = Array.from({ length: n });

    generatePermutations(n, 0, used, permutation);
};
printPermutations();
