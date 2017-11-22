function solve(args) {
    let n = Number(args[0]);
    (n % 2 === 0)
        ? console.log(`even ${n}`)
        : console.log(`odd ${n}`);
}
solve(['6']);