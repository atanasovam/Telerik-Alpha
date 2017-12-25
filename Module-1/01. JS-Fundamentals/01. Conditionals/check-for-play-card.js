const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

/**
 * valid => '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
 */

const check = (args) => {
    const getCharValidity = (char) => {
        const result = { yesOrNo: '', character: char };
        const validChars = [
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
        ];

        if (!validChars.includes(char)) {
            result.yesOrNo = 'no';
        } else {
            result.yesOrNo = 'yes';
        }

        return result.yesOrNo + ' ' + result.character;
    };

    const token = gets();
    const result = getCharValidity(token);

    print(result);
};
check();
