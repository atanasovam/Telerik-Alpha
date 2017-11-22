function solve(args) {
    let currMax = 1;
    let maxSeq = [];
    let next;
    let current;

    // args = args.map(Number);
    args.reverse();
    let n = args.pop();
    args.reverse();

    for (let i = args.length - 1; i > 0; i -= 1) {
        current = args[i].trim();
        next = args[i - 1].trim();

        if (next === current) {
            currMax += 1;
        } else {
            maxSeq.push(currMax);
            currMax = 1;
        }
    }
    maxSeq.push(currMax);

    let result = maxSeq.sort().pop();
    console.log(result);
}
solve(['10', '1', 's1', '1', ' -2a', '-2a', '-2a', '-2'])