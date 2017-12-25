const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const convert = () => {
    const decode = (index, number) => {
        const isEvenPosition = (num) => {
            if (num % 2 === 0) {
                return true;
            }
            return false;
        };
        const decToBin = (dec) => {
            const bin = Array.from((dec >>> 0).toString(2));

            if (bin.length < 8) {
                const diff = 8 - bin.length;
                for (let i = 0; i < diff; i += 1) {
                    bin.unshift(0);
                }
            }
            return bin.map(Number);
        };

        const type = isEvenPosition(index);
        const binVersion = decToBin(number);
        let result = '';
        if (type) { // even position => remove elements on EVEN psns
            for (let i = 1; i < binVersion.length; i += 2) {
                result += binVersion[i];
            }
        } else { // odd position => remove elements on ODD psns
            for (let i = 0; i < binVersion.length; i += 2) {
                result += binVersion[i];
            }
        }

        return result;
    };

    const numbers = gets().split(',').map(Number);
    const resultArray = Array.from({ length: numbers.length });

    for (let i = 0; i < numbers.length; i += 1) {
        resultArray[i] = (decode(i, numbers[i]));
    }

    print(resultArray.join(''));
};
convert();
