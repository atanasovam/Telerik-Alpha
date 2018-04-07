interface ICheck {
    gets: void;
    print: void;
}

export class Test implements ICheck {
    test: Array<string> = [
        '6',
        '1 2 3 4 5 6',
        '2 3 4 5 6 7',
        '6 5 4 3 2 1',
        '3 5 3 -5 -4 -2',
        '3 4 5 6 7 8',
        '4 5 6 7 8 9',
        '9 8 7 6 5 4',
    ];

    // gets = (arr) => {
    //     let index = 0;

    //     return () => {
    //         const toReturn = arr[index];
    //         index += 1;
    //         return toReturn;
    //     };
    // };

    // print() {

    // }
    const get = this.gets || getGets(test);
    const print = this.print || console.log;
};
