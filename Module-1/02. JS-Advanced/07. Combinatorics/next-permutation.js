const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const generateNextPermutation = () => {
    const generatePermutations = (n, index, used, permutation, allPerms) => {
        if (index === n) {
            allPerms.push([...permutation].join(' ').toString());
            return;
        }

        for (let i = 0; i < n; i += 1) {
            if (used[i]) {
                continue;
            }

            permutation[index] = i + 1;
            used[i] = true;
            generatePermutations(n, index + 1, used, permutation, allPerms);
            used[i] = false;
        }
    };

    const [n, currentPermutation] = [+gets(), gets()];
    const used = Array.from({ length: n });
    const permutation = Array.from({ length: n });
    const allPerms = [];

    generatePermutations(n, 0, used, permutation, allPerms);

    const indexOfCurrentPerm = allPerms.indexOf(currentPermutation);
    print(allPerms[indexOfCurrentPerm + 1]);
};
generateNextPermutation();
