function solve(args) {
    let [a, b] = [args[0], args[1]].map(Number);
    let res = [];
    a < b
        ? res = [a, b]
        : res = [b, a];
    console.log(res.join(' '));
}
solve(['5.5', '4.5']);