const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const calculate = (() => {
    const chooseCommand = (cmnd) => {
        switch (cmnd) {
            case 'set':
                number = Array.from(token);
                break;
            case 'front-add':
                number.unshift(token);
                break;
            case 'front-remove':
                number.shift();
                break;
            case 'back-add':
                number.push(token);
                break;
            case 'back-remove':
                number.pop();
                break;
            case 'reverse':
                number = number.reverse();
                break;
            case 'print':
                print(number.join(''));
                break;
            case 'end':
                return;
            default:
                break;
        }
    };

    let [command, token] = gets().split(' ');
    let number = Array.from(token);

    while (command !== 'end') {
        chooseCommand(command);

        [command, token] = gets().split(' ');
    }
})();
