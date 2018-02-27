const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const printDeck = () => {
    let n = gets();

    switch (n) {
        case 'J':
            n = 11;
            break;
        case 'Q':
            n = 12;
            break;
        case 'K':
            n = 13;
            break;
        case 'A':
            n = 14;
            break;
        default:
        n = +n;
            break;
    }
    // faces clubs diamonds hearts spades
    const deck = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A',
    ];

    for (let i = 0; i < n - 1; i += 1) {
        print(`${deck[i]} of spades, ${deck[i]} of clubs, ${deck[i]} of hearts, ${deck[i]} of diamonds`);
    }
};
printDeck();
