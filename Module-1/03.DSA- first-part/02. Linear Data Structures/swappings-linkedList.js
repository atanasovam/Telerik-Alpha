const tests = require('./../../../gest-print.js');
const LinkedList = require('./constructors//linked-list');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const swappings = (() => {
    const num = +gets();
    const points = gets().split(' ');
    let i = 1;

    const currentNumbers = Array.from({ length: num }, (x) => i++);

    points.forEach((p, indx) => {
        
    });

    print(currentNumbers.join(' '));
})();
