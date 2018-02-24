/* eslint-disable */
const test = () => {
    const getGets = (arr) => {
        let index = 0;

        return () => {
            const toReturn = arr[index];
            index += 1;
            return toReturn;
        };
    };

    // this is the test
    // const test = [
    //     '7 4', // n k
    //     '1 5 4 7',
    // ];
    // const test = ['27',];
    const test = [
        '6',
        '1 2 3 4 5 6',
        '2 3 4 5 6 7',
        '6 5 4 3 2 1',
        '3 4 5 6 7 8',
        '4 5 6 7 8 9',
        '9 8 7 6 5 4',
        '3 5 3 -5 -4 -2',
    ];
    // const test = [
    //     '9 10',
    //     '0 98 3 520 367 394 452 8 460 65',
    //     '282 42 162 110 316 451 20 21 529 156',
    //     '472 265 513 516 120 444 428 299 82 218',
    //     '161 221 528 257 373 34 4 202 329 433',
    //     '83 253 558 483 499 60 374 424 43 475',
    //     '460 450 3 387 68 173 324 299 547 93',
    //     '531 66 119 31 171 63 103 169 274 154',
    //     '355 505 93 187 120 128 136 335 177 334',
    //     '345 16 246 466 373 120 259 298 389 260'
    // ];

    // const test = [
    //     `2`,
    //     `we telerik academy are`,
    //     `wewearetelerikacademywe`,
    //     `we are telerik academy`,
    //     `wearenottelerikacademy`,
    // ];

    const gets = this.gets || getGets(test);
    const print = this.print || console.log;
    // console.log(`params: ${test} from gets-print.js`);
    // module.exports = test;
    /* eslint-enable */
    return { gets: gets, print: print };
};
module.exports = test;


// '6 6', //n x m
// '92 11 23 42 59 48 34',
// '09 9 09 09 09 09',
// '17 63 92 46 85 95',
// '34 17 52 69 23 95',
// '26 88 17 71 29 95',
// '26 34 16 17 39 95',
