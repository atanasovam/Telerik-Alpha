function solve(number) {
    let num = Number(number[0]);

    let n = Math.sqrt(num);
    let isPrime = true;

    for (let i = 2; i <= n; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (n === 0 || n === 1) {
        return console.log("false");
    }
    return isPrime;
}