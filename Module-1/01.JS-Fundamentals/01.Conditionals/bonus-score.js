const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const calculateScore = (args) => {
    const checkGroup = (number) => {
        let finalScore;
        if (number <= 0 || number > 9) {
            finalScore = 'invalid score';
        } else if (1 <= number && number <= 3) {
            finalScore = number * 10;
        } else if (4 <= number && number <= 6) {
            finalScore = number * 100;
        } else if (7 <= number && number <= 9) {
            finalScore = number * 1000;
        } else {
            finalScore = 'invalid score';
        }

        return finalScore;
    };

    const n = +gets();
    const result = checkGroup(n);
    print(result);
};
calculateScore();
