const oddOrEven = (args) => {
    const n = Number(args[0]);
    if (n % 2 === 0) {
       return `even ${n}`;
    }
    return `odd ${n}`;
};
oddOrEven(['6']);
