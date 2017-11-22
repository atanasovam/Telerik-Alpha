function solve(args) {
    let [arr, patt] = [args[1], args[2]],
        counter = 0;
    arr = Array.from(arr.split(' '));

    for (let d of arr) {
        if (d == patt) {
            counter += 1;
        }
    }

    console.log(counter)
}
solve([
    '8',
    '28 6 21 6 -7856 73 73 -56',
    '73'
])