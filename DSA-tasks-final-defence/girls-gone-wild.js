/* globals Set */

const tests = require('../gest-print');
const returnedObj = tests();
const [gets, print] = [returnedObj.gets, returnedObj.print];

const shirts = +gets();
const skirts = gets().split('').sort();
const girls = +gets();

let combSkirts = (sk, girlsCount, indx, combination) => {
    if (indx === girlsCount) {
        const comb = combination.join('');
        if (!mainUsed.has(comb)) {
            mainUsed.add(comb);
            skirtsCombinations.push([...(comb.split(''))]);
        }
        return;
    }

    const start = indx;

    for (let i = start; i < sk.length; i += 1) {
        if (!used.has(i)) {
            used.add(i);
            const currEl = sk[i];
            combination[indx] = currEl;
            combSkirts(sk, girlsCount, indx + 1, combination);
            used.delete(i);
        }
    }
};


let combShirts = (sh, girlsCount, indx, combination) => {
    if (indx === girlsCount) {
        const skirtsSet = [...new Set(combination)];

        if (skirtsSet.length === combination.length) {
            shirtsCombinations.push([...combination]);
        }

        return;
    }

    const start = indx ? combination[indx - 1] + 1 : 0;

    for (let i = start; i < sh; i += 1) {
        combination[indx] = i;
        combShirts(sh, girlsCount, indx + 1, combination);
    }
};

const mainUsed = new Set();
const used = new Set();
const skirtsCombinations = [];

combSkirts(skirts, girls, 0, []);

skirtsCombinations.sort();

let shirtsCombinations = [];

combShirts(+shirts, girls, 0, []);

shirtsCombinations = [...new Set(shirtsCombinations)];

const result = [];
const usedTwo = new Set();

skirtsCombinations.forEach((skirtsVal, k) => {
    shirtsCombinations.forEach((shirtsVal, j) => {
        const currResult = [];
        for (let i = 0; i < girls; i++) {
            currResult.push(
                `${shirtsVal[i]}${skirtsVal[i]}`
            );
        }

        if (!usedTwo.has(currResult.join('-'))) {
            usedTwo.add(currResult.join('-'));
            result.push(currResult.join('-'));
        }
    });
});


// const finalResult = [...result].sort((a, b) => a - b);

const finalResult = result.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] < b[i]) {
            return - 1;
        } else if (a[i] > b[i]) {
            return 1;
        }
        return 0;
    }
});

print(finalResult.length);
finalResult.forEach((res) => print(res));
