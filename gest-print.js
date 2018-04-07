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
        '5 3',
'Gosho Tosho Penka Miro Stanka',
        'Miro Gosho',
        'Gosho Stanka',
        'Stanka Miro',
    ];
    // const test = [
    //     '7 4',
    //     'Emo Misho Ivanka Ginka Vancho Stancho Sashka',
    //     'Emo Misho',
    //     'Misho Emo',
    //     'Misho Sashka',
    //     'Sashka Stancho',
    // ];
    const gets = this.gets || getGets(test);
    const print = this.print || console.log;
    // console.log(`params: ${test} from gets-print.js`);
    // module.exports = test;
    /* eslint-enable */
    return { gets: gets, print: print };
};

module.exports = test;
