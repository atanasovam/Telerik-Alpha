function solve(args) {
    // args = args
    //     .map(Number)
    //     .sort()
    //     .reverse();
    // console.log(args.join(' '));

    let [a, b, c] = args.map(Number);
    let first, second, third;

    if (a > b && a > c) {
        first = a;
        if (b > c) {
            second = b;
            third = c;
        } else {
            second = c;
            third = b;
        }
    } else if (b > a && b > c) {
        first = b;
        if (a > c) {
            second = a;
            third = c;
        } else {
            second = c;
            third = a;
        }
    } else if (c > a && c > b) {
        first = c;
        if (a > b) {
            second = a;
            third = b;
        } else {
            second = b;
            third = a;
        }
    } else {
        console.log(`${a} ${b} ${c}`)
    }
    console.log(`${first} ${second} ${third}`);
}
solve(['-2', '-2', '1']);