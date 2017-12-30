const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const milesToMeters = () => {
    const miles = +gets();
    const meters = miles * 1609;

    print(Math.floor(meters));
};
milesToMeters();
