const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const substr = () => {
    const check = (word, patt) => {
        let currCh;
        let nextCh;
        let currSeq;
        let currCount = 0;

        for (let i = 0; i < word.length; i += 1) {
            currCh = word[i];
            nextCh = word[i + 1];
            currSeq = currCh + nextCh;

            if (currSeq === patt) {
                currCount += 1;
            }
        }

        return currCount;
    };
    let count = 0;
    const pattern = gets();
    const str = gets().split(' ');

    for (let i = 0; i <= str.length; i += 1) {
        count += check(str[i], pattern);
    }

    print(count);
};
substr();
