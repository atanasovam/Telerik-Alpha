const getType = (number) => {
    const num = Number(number[0]);

    const n = Math.sqrt(num);
    let isPrime = true;

    for (let i = 2; i <= n; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (n === 0 || n === 1) {
        return 'false';
    }
    return isPrime;
};
