function solve(args) {
    let n = args[0] + '';
    n = Array.from(n);
    let res = convert(n.pop());

    console.log(res);

    function convert(digit) {
        switch (digit) {
            case '0': return 'zero';
            case '1': return 'one';
            case '2': return 'two';
            case '3': return 'three';
            case '4': return 'four';
            case '5': return 'five';
            case '6': return 'six';
            case '7': return 'seven';
            case '8': return 'eight';
            case '9': return 'nine';
            default: return 'not a digit';
        }
    }
}
solve([42]); 