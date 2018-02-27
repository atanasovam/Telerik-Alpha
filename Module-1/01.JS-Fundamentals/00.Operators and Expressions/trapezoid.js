const calculate = (args) => {
    const [a, b, h] = [args[0], args[1], args[2]].map(Number);
    const result = h * ((a + b) / 2);
    return result.toFixed(7);
};
calculate(['3', '4', '23']);
