const getPoint = (args) => {
    const [x, y] = [args[0], args[1]].map(Number);
    const sum = (x * x) + (y * y);
    const distance = Math.sqrt(sum);
    if (sum <= 1.5 * 1.5) {
        return `yes ${distance.toFixed(2)}`;
    }
    return `no ${distance.toFixed(2)}`;
};
getPoint(['-1', '1']);
