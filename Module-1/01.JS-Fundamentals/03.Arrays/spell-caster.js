const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const solve = (() => {
    let words = gets().split(' ');

    let currLast = '';
    let currWord;
    let alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
    currLast = firstStep();
    secondStep(currLast, alphabet);


    function secondStep(str, alphabet) {
        str = Array.from(str)
        let f = str.shift(), s;
        let times = alphabet.indexOf(f);
        let position = (times % str.length) + 1
        print(str.join(''))
    }


    function firstStep() {
        words = reduceStr();
        while (words.length !== 0) {
            words = reduceStr();
        }

        function reduceStr() {
            for (let i = 0; i < words.length; i += 1) {
                currWord = Array.from(words[i]);
                words[i] = currWord.slice(0, currWord.length - 1);
                currLast += currWord.pop();
            }
            words = words
                .filter(a => a != '');


            return words;
        }
        return currLast;
    }
})();
// print(solve);
