function solve(args) {
    let n = args.map(Number);
    let result = [];
    let currArr = [];

    for (let row = 0; row < n; row += 1) {
        for (let col = row + 1, num = 0; num < n; num += 1, col++) {
            currArr.push(col)
        }
        result.push(currArr);
        currArr = [];
    }
    for (let e of result) {
        console.log(e.join(' '));
    }
    // console.log(result.map(e => result[e].join('\n')));
}
solve(['4'])