function solve(args) {
    let n = Number(args[0]);
    let result = [];

    for (let i = 0; i < n; i += 1) {
        result.push(i * 5);
    }
    console.log(result.join('\n'));
}
solve(['5']);