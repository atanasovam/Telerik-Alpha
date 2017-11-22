function solve(args) {
    args.shift();
    // args = args.map(Number);
    let filtered = {};

    for (let e of args) {
        if (!filtered[e]) {
            filtered[e] = 1;
        } else {
            filtered[`${e}`] += 1;
        }
    }

    let resultValue = Object.values(filtered)
        .sort()
        .reverse()
        .shift();

    let resultKey = Object.keys(filtered)
        .find(key => filtered[key] === resultValue)

    console.log(`${resultKey} (${resultValue} times)`);
} // 50/100

function solve2(args) {
    let curr, next, key;

    let currValue = 1,
        bestValue = 1;

    args.shift();
    args.sort();

    for (let i = 1; i < args.length; i += 1) {
        curr = args[i];
        next = args[i - 1];

        curr === next
            ? currValue += 1
            : currValue = 1;

        if (currValue > bestValue) {
            bestValue = currValue;
            key = curr;
        }
    }
    console.log(`${key} (${bestValue} times)`);
} // 100/100
solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
solve2(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
