function solve(args) {
    let [a, b, c] = args.map(Number);
    let res = '';

    let d = Math.pow(b, 2) - 4 * a * c;
    d < 0
        ? res = 'no real roots'
        : calc();

    console.log(res);

    function calc() {
        if (d === 0) {
            res = `x1=x2=${(-(b) / (2 * a)).toFixed(2)}`;
        } else {
            let x1, x2;
            x1 = ((-b) - Math.sqrt(d)) / (2 * a);
            x2 = ((-b) + Math.sqrt(d)) / (2 * a);

            res = `x1=${x1.toFixed(2)}; x2=${x2.toFixed(2)}`;
        }
        return res;
    }
}
solve(['2', '5', '-3']);
solve(['-1', '3', '0']);
solve(['-0.5', '4', '-8']);
solve(['5', '2', '8']);
solve(['0.2', '9.572', '0.2']);
