function solve(n) {
    for (let i = n - 1; i >= 0; i -= 1) {
        if (isPrime(i)) {
            console.log(i);
            return
        }
    }

    function isPrime(num) {
        let n = Math.sqrt(num);

        for (let i = 2; i <= n; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        if (n === 0 || n === 1) {
            return false;
        }
        return true;
    }
}
solve(13);
// solve(126);
// solve(26);
