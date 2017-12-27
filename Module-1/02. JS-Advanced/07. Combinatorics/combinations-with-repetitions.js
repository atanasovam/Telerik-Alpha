const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;


const generateCombinations = (n, k, index, combination) => {
    if (index === k) {
        print(combination.join(' '));
        return;
    }

    const start = index
        ? combination[index - 1]
        : 1;
    for (let i = start; i <= n; i += 1) {
        combination[index] = i;
        generateCombinations(n, k, index + 1, combination);
    }
};

const [n, k] = gets().split(' ').map(Number);
const combination = Array.from({ length: k });

generateCombinations(n, k, 0, combination);

