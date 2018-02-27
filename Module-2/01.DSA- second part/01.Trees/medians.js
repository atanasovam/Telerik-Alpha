const tests = require('./../../../gest-print');
const returnedObj = tests();
const [gets, print] = [returnedObj.gets, returnedObj.print];

const generateMedians = (() => {
    const chooseCommand = (k, v) => {
        let median;

        switch (k) {
            case 'ADD':
                tokens.push(v);
                break;
            case 'FIND':
                tokens = tokens.sort((a, b) => a - b);
                let index = '';
                if (tokens.length % 2 !== 0) {
                    index = +(((tokens.length - 1) / 2) | 0);
                    median = tokens[index];
                    print(median);
                    break;
                }
                index = ((tokens.length - 1) / 2 | 0);
                median = (+tokens[index] + +tokens[index + 1]) / 2;
                print(median);
                break;
            default:
                break;
        }

        return median;
    };

    let [command, value] = gets().split(' ');
    let tokens = [];

    while (command !== 'EXIT') {
        chooseCommand(command, +value);
        [command, value] = gets().split(' ');
    }
})();
