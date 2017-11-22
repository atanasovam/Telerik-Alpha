function solve(args) {
    let str = args[0],
        result;

    let countLeft = str.match(/\(/g).length;
    let countRight = str.match(/\)/g).length;
    (countLeft === countRight)
        ? result = 'Correct'
        : result = 'Incorrect';

    console.log(result);
}
solve(['((a+b)/5-d)']);
solve([')(a+b))']);
