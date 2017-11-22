function solve(args) {
    let n = Number(args[0]);
    let res = [];
    for (let i = 1; i <= n; i += 1) {
        res.push(i);
    }
    console.log(res.join(' '));
}