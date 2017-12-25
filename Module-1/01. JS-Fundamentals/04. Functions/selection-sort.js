const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const selectionSort = () => {
    const args = gets().map(Number).splice(1);
    const newArr = [];
    args.filter((e) => newArr.push(e));
    newArr.sort(function(a, b) {
        return a - b;
    });

    print(newArr.join('\n'));
};
selectionSort();
