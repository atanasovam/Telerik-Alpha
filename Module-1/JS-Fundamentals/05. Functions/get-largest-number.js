function solve(args) {
    let [f, s, t] =
        Array.from(args[0]
            .split(' ')
            .map(Number));

    console.log(GetMAx(GetMAx(f, s), t))

    function GetMAx(a, b) {
        return Math.max(a, b)
    }
}
solve(['3 6 9'])