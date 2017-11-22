function solve(args) {
    let n = args.shift();
    let x = args.pop();
    console.log(args.indexOf(x));    
}
solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);