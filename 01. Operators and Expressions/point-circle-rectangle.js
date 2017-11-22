function solve(args) {
    let [x, y] = [args[0], args[1]].map(Number);
    let distance = (x - 1) * (x - 1) + (y - 1) * (y - 1);   
    let answer = { circle: 'outside', rectangle: 'outside' };

    if (distance <= 1.5 * 1.5) {
        answer.circle = 'inside';
        if ((y <= 1 && y >= -1) && (x <= 5 && x >= -1)) {
            answer.rectangle = 'inside';
        }
    } else if ((y <= 1 && y >= -1) && (x <= 5 && x >= -1)) {
        answer.rectangle = 'inside';
    }

    console.log(`${answer.circle} circle ${answer.rectangle} rectangle`);
}
solve(['2.5', '2']);
solve(['0', '1']);
solve(['2.5', '1']);
solve(['1', '2']);