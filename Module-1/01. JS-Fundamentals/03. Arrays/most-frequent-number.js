const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const getMostFrequent = () => {
    const mostFrequentFilter = (numbersArray) => {
        let curr;
        let next;
        let key;

        let currValue = 1;
        let bestValue = 1;

        numbersArray.sort();

        for (let i = 1; i < numbersArray.length; i += 1) {
            curr = numbersArray[i];
            next = numbersArray[i - 1];

            if (curr === next) {
                currValue += 1;
            } else {
                currValue = 1;
            }

            if (currValue > bestValue) {
                bestValue = currValue;
                key = curr;
            }
        }
        print(`${key} (${bestValue} times)`);
    };

    const tokens = +gets();
    const numbers = [];

    for (let i = 0; i < tokens; i += 1) {
        const currentLine = +gets();
        numbers.push(currentLine);
    }

    mostFrequentFilter(numbers);
};
getMostFrequent();

// mostFrequent(['4', '1', '1']);
// mostFrequent2(['4', '1', '1']);

// const mostFrequent = (args) => {
//     args.shift();
//     const filtered = {};

//     for (const e of args) {
//         if (!filtered[e]) {
//             filtered[e] = 1;
//         } else {
//             filtered[`${e}`] += 1;
//         }
//     }

//     const resultValue = Object.values(filtered)
//         .sort()
//         .reverse()
//         .shift();

//     const resultKey = Object.keys(filtered)
//         .find((key) => filtered[key] === resultValue);

//     console.log(`${resultKey} (${resultValue} times)`);
// }; // 50/100
