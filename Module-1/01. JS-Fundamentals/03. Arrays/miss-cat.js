/* globals Map */
const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const findMissCat = () => {
    const n = +gets();
    const cats = {};

    for (let i = 0; i < n; i += 1) {
        const currCat = +gets();
        if (typeof (cats[currCat]) === 'undefined') {
            cats[currCat] = 0;
        }
        cats[currCat] += 1;
    }

    let winner = Number.MAX_SAFE_INTEGER;
    let current = 0;
    for (const cat in cats) {
        if (cats.hasOwnProperty(cat)) {
            if (Number(cat) < winner || cats[cat] > current) {
                winner = Number(cat);
                current = cats[cat];
            }
        }
    }
    print(winner);
};
findMissCat();
