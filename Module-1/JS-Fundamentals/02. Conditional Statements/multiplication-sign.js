function solve(args) {
    let str = args.join('');
    let res = ``;

    args.forEach(function (e) {
        if (e.match(/0/g) && e.length === 1) {
            return res = `0`;
        }
    });
    if (res !== `0`) {
        let reg = /(\-)/g;
        let matches = str.match(reg);
        if (res === `` && (matches.length == 2 || matches.length == 0)) {
            res = `+`;
        } else {
            if (res === ``) {
                res = `-`;
            }
        }
    }
    console.log(res);
}
solve(['-2', '4', '3']);