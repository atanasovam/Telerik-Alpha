function solve(args) {
    let n = Number(args[0]);
    (n % 5 === 0 && n % 7 === 0)
        ? console.log(`true ${n}`)
        : console.log(`false ${n}`);
}
solve(['140']);
solve(['35']);
solve(['7']);
solve(['5']);