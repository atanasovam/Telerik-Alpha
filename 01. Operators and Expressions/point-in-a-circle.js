function solve(args) {
    let [x, y] = [args[0], args[1]].map(Number);
    let sum = (x * x) + (y * y);
    let distance = Math.sqrt(sum);
    if (sum <= 1.5 * 1.5) {
        console.log(`yes ${distance.toFixed(2)}`);
    } else {
        console.log(`no ${distance.toFixed(2)}`);
    }
}
solve(['-1', '1']);