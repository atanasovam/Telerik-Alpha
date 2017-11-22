function solve(args) {
    args.shift();
    let current, next;
    let maxSeq = 1;
    let currSeq = 1;

    for (let i = 0; i < args.length; i += 1) {
        current = +args[i];
        next = +args[i + 1];
        if (current < next) {
            currSeq += 1;
        } else {
            currSeq = 1;
        }
        if (currSeq > maxSeq) {
            maxSeq = currSeq;
        }
    }

    console.log(maxSeq)
}
solve(['8', '2', '3', '4', '5', '6', '7', '8', '9']);