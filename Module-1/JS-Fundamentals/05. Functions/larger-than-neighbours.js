function solve(args) {
    let numbers = Array.from(args[1].split(' ')).map(Number);

    function calculate() {
        let sum = 0;
        let a, b, c;

        for (let i = 1; i < numbers.length - 1; i += 1) {
            [a, b, c] = [numbers[i - 1], numbers[i], numbers[i + 1]];

            if (a < b && c < b) {
                sum += 1;
            }
        }
        return sum;
    }
    
    let result = calculate();
    console.log(result);
}
solve([
    '6',
    '-26 -25 -28 31 2 27'
])