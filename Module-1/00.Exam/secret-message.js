const tests = require('./../../gest-print');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const encodeMessage = () => {
    const encode = (index, encoded) => {
        if (index >= str.length) {
            return 0;
        }

        if (str[index] === '{') {
            let num = '';
            let currStr = '';

            let i = index - 1;
            do {
                if (typeof (str[i]) !== 'number') {
                    break;
                }
                num += str[i];
                i -= 1;
            } while (i >= 0);

            do{
                currStr
            }
            encode(index + 1, encoded);
        }

        return encoded(index + 1, encoded);
    };

    const str = gets();
    // const encoded = encode();

    // print(encoded);
};
encodeMessage();
