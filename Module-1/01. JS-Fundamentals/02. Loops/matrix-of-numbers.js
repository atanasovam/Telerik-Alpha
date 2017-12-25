const solve = (args) => {
    const n = args.map(Number);
    const result = [];
    let currArr = [];

    for (let row = 0; row < n; row += 1) {
        for (let col = row + 1, num = 0; num < n; num += 1, col++) {
            currArr.push(col);
        }
        result.push(currArr);
        currArr = [];
    }
    for (const e of result) {
        console.log(e.join(' '));
    }
};
solve(['4']);
