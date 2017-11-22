function solve(args) {
    args = args.map(Number);
    let currSum = 0;
    for (let i = 0; i < args.length; i += 1) { 
        min = Math.min()
        currSum+=args[i];
    }
    
    args
        .sort()
        .reverse();
    let res = {
        min: args[args.length - 1],
        max: args[0],
        sum: currSum,
        avrg: currSum / args.length
    };

    console.log(`min=${(res.min).toFixed(2)}\nmax=${(res.max).toFixed(2)}\nsum=${(res.sum).toFixed(2)}\navg=${(res.avrg).toFixed(2)}`);
}
solve(['2', '-1', '4']);