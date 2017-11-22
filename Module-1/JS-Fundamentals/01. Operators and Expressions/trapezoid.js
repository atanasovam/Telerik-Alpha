function solve(args) {
    let [a, b, h] = [args[0], args[1], args[2]].map(Number);
    let result = h*((a + b) / 2);
    console.log(result.toFixed(7));
}
solve(['3', '4', '23'])