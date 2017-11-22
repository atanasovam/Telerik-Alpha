function solve(args) {
    let firstStr = args[0];
    let secondStr = args[1];
    let res = `=`;

    for (let i = 0; i < Math.max(firstStr.length, secondStr.length); i += 1) {
        if (firstStr[i] > secondStr[i]) {
            res = `>`;
            break;
        } else if (firstStr[i] < secondStr[i]) {
            res = `<`;
            break;
        }
    }

    console.log(res);
}
solve(['halo', 'hello']);
solve(['foocd', 'foocd']);