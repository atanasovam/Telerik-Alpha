const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const removeElements = () => {
    const args = gets();
    const arr = args.splice(1);
    const firstEl = args[0];
    const result = [];

    for (const el of arr) {
        if (el !== firstEl) {
            result.push(el);
        }
    }

    print(result.join('\n'));
};
const removeElements2 = (args) => {
    const arr = args.splice(1);
    const firstEl = args[0];

    const obj = arr.reduce((el, cur, i) => {
        el[i] = cur;
        return el;
    }, {});

    const result = Object.values(obj).filter((e) => e !== firstEl);

    console.log([...result].join('\n'));
};
removeElements();
removeElements2();
