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

    const test = [
        '6',
        '7',
        '3',
        '4',
    ];

    // const test = [
    //     '5',
    //     '5',
    //     '2',
    //     '2',
    // ];

    const gets = this.gets || getGets(test);
    const print = this.print || console.log;
    // console.log(`params: ${test} from gets-print.js`);
    // module.exports = test;
    /* eslint-enable */
    return { gets: gets, print: print };
};

module.exports = test;
