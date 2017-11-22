function solve(args) {
    let numbers = Array.from(args[1].split(' ')).map(Number);

    let result = numbers.sort(function (a, b) { return a - b; });
    console.log(result.join(' '))
}
solve([
    '10',
    '36 10 1 34 28 38 31 27 30 20'
])
solve([
    '6',
    '3 4 1 5 2 6'
])