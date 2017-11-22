function solve2(args) {
    let str = args[0], reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    console.log(reversed)
}
function solve(args) {
    let str = [...args[0]];
    reversed = str.reverse();

    console.log(reversed.join(''))
}
solve(['sample']);
solve(['qwertytrewq']);