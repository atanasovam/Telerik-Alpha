const tests = require('./../../gest-print');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const printSlogan = () => {
    const n = +gets();
    const text = Array.from({ length: 2 * n }, (x) => gets());
    let words = '';
    let slogan = '';
    let currText = '';
    let result = '';

    for (let i = 0; i < n * 2; i += 2) {
        words = text[i].split(' ');
        slogan = text[i + 1];

        /* eslint-disable */
        currText = slogan;
        result = slogan;
        words.forEach((pattern, index) => {
            let regx = new RegExp(pattern, 'g');
            
            if (currText.match(regx)) {
                result = result.replace(pattern, pattern + ' ');
                currText = currText.replace(pattern, '');
            }
        });
    }
};
printSlogan();