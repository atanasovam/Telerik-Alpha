const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const encode = (() => {
    const generatePermutations = (index, current, used, ciphers) => {
        if (index === code.length - 1) {
            permutations.push(current.join(''));
            return;
        }

        for (let i = 0; i < code.length; i++) {
            // if (used[i]) {
            //     continue;
            // }

            const next = ciphers[i];
            current[index] = next;
            used[i] = true;
            generatePermutations(index + 1, current, used, ciphers);
            current[index] = next;
            used[i] = false;
        }
    };

    const code = gets();
    const tokens = gets();

    const cipher = [];
    const digits = [];

    const rgx = new RegExp(/\D[0-9]+/, 'g');
    let currTokens = rgx.exec(tokens);

    while (currTokens !== null) {
        cipher.push([
            .../\S/g.exec(currTokens[0]),
            .../[0-9]+/g.exec(currTokens[0]),
        ]);
        digits.push(.../[0-9]+/g.exec(currTokens[0]));
        currTokens = rgx.exec(tokens);
    }

    let permutations = [];
    generatePermutations(0, [], [], digits);

    permutations.forEach((x) => {
        if (x === code) {
            print(x);
        }
    });
    print(permutations);
})();
