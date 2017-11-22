function solve(args) {
    let biggestN = -Infinity;
    args = args.map(Number);

    args.forEach(function (e) {
        if (e > biggestN) {
            biggestN = e;
        }
    });

    console.log(biggestN);
}
solve(['-2', '-22', '1', '0', '0']);