function solve(args) {
    let str = args[0];
    let thirdN = str[str.length - 3];

    if (thirdN == 7) {
        console.log(true)
    } else {
        (str.length < 3)
            ? console.log(`false 0`)
            : console.log(`false ${thirdN}`)
    }
}
solve(['9703']);
solve(['701']);
solve(['50']);
solve(['877']);
solve(['777877']);
solve(['9999799']);