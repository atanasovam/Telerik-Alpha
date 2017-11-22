function solve2(args) {
    let arr = args.splice(1), firstEl = args[0], result = [];

    for (let el of arr) {
        if (el !== firstEl) {
            result.push(el);
        }
    }

    console.log(result.join('\n'))
}
function solve(args) {
    let arr = args.splice(1), firstEl = args[0], result;

    let obj = arr.reduce(function (el, cur, i) {
        el[i] = cur;
        return el;
    }, {});

    result = Object.values(obj).filter(e => e !== firstEl);
    
    console.log([...result].join('\n'))
}
solve([
    '1', '2', '3', '2', '1', '2', '3', '2'
]);
solve([
    '_h/_',
    '^54F#',
    'V',
    '^54F#',
    'Z285',
    'kv?tc`',
    '^54F#',
    '_h/_',
    'Z285',
    '_h/_',
    'kv?tc`',
    'Z285',
    '^54F#',
    'Z285',
    'Z285',
    '_h/_',
    '^54F#',
    'kv?tc`',
    'kv?tc`',
    'Z285'
]);