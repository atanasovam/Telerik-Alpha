const divide = (args) => {
    const n = Number(args[0]);
    if (n % 5 === 0 && n % 7 === 0) {
        return `true ${n}`;
    }
    return `false ${n}`;
};
divide(['140']);
divide(['35']);
divide(['7']);
divide(['5']);
