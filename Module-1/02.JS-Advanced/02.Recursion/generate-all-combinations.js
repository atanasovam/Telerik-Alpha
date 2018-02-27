const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const generatePermutations = (index, current, used, source, permutations) => {
    if (index === source.length) {
        permutations.push([...current]);
        return;
    }

    for (let i = 0; i < source.length; i += 1) {
        if (used[i]) {
            continue;
        }

        const next = source[i];
        current[index] = next;
        used[i] = true;
        generatePermutations(index + 1, current, used, source, permutations);
        current[index] = next;
        used[i] = false;
    }
};
generatePermutations();
