function solve(args) {
    args = args.map(Number).splice(1);
    let newArr = [];
    args.filter(e=> newArr.push(e));
    newArr.sort(function (a, b) { return a - b; });

    console.log(newArr.join('\n'));
}
solve(["6", "32", "2", "3", "-208", "2", "1"]);