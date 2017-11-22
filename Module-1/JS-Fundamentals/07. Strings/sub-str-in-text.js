function solve(args) {
    let substr = args[0],
        str = args[1].split(' '),
        count = 0,
        rgx = /\in/;
    let matches
    for (let el of str) {
        matches = el.match(rgx);
        if (matches !== null) {
            console.log(matches.length)
            count++;
        }
    }
    console.log(count);
}
solve([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);