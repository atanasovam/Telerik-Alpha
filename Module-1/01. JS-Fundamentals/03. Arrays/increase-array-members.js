const increase = (args) => {
    const n = Number(args[0]);
    const result = [];

    for (let i = 0; i < n; i += 1) {
        result.push(i * 5);
    }
    console.log(result.join('\n'));
};
increase(['5']);
