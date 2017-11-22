function solve(args) {
    let str = Number(args[0]);
    let mask = 1 << 3;
    let nAndMask = str & mask;
    let result = nAndMask >> 3;
    // let binche = (args[0] >>> 0).toString(2)
    console.log(result)
}
solve(['15']);
solve(['1024']);