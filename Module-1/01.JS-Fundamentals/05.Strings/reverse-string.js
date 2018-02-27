const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const reverseStr = () => {
    const str = gets();
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

   print(reversed);
};
const reverseStr2 = (args) => {
    const str = [...gets()];
    const reversed = str.reverse();

    print(reversed.join(''));
};
reverseStr();
reverseStr2();
