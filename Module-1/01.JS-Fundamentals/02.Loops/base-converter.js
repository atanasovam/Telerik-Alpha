const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const hexToDecimal = (args) => {
    const hex = gets;
    const dec = parseInt(hex, 16);
    print(dec);
};
// hexToDecimal();

const decToHex = (args) => {
    const dec = gets;
    const hex = dec.toString(16).toUpperCase();
    print(hex);
};
// decToHex();

const decToBin = (args) => {
    const dec = gets;
    const bin = (dec >>> 0).toString(2);
    print(bin);
};
// decToBin();

const binToDec = (args) => {
    const bin = gets;
    const dec = parseInt(bin, 2);
    print(dec);
};
// binToDec();

const binaryToDecimal = (args) => {
    const bin = gets.toString();
    let dec = 0;

    for (let i = 0; i < bin.length; i += 1) {
        dec = dec * 2 + (bin[i] === '1' ? 1 : 0);
    }

    print(dec);
};
// binaryToDecimal();

const hexToBin = () => {
    const hex = gets();
    const dict = {
        0: '0000',
        1: '0001',
        2: '0010',
        3: '0011',
        4: '0100',
        5: '0101',
        6: '0110',
        7: '0111',
        8: '1000',
        9: '1001',
        'A': '1010',
        'B': '1011',
        'C': '1100',
        'D': '1101',
        'E': '1110',
        'F': '1111',
    };

    let binary = '';

    for (let i = 0; i < hex.length; i += 1) {
        binary += dict[hex[i]];
    }
    print(binary.replace(/^0+(?!\.|$)/, ''));
};
// hexToBin();

const binToHex = () => {
    let number = gets();
    const dict = {
        '0000': '0',
        '0001': '1',
        '0010': '2',
        '0011': '3',
        '0100': '4',
        '0101': '5',
        '0110': '6',
        '0111': '7',
        '1000': '8',
        '1001': '9',
        '1010': 'A',
        '1011': 'B',
        '1100': 'C',
        '1101': 'D',
        '1110': 'E',
        '1111': 'F',
    };

    let hex = '';

    if (number.length % 4 !== 0) {
        for (let i = number.length % 4; i < 4; i++) {
            number = '0' + number;
        }
    }

    for (let i = 0; i < number.length; i += 4) {
        hex += dict[number.substring(i, i + 4)];
    }
    print(hex);
};
binToHex();
