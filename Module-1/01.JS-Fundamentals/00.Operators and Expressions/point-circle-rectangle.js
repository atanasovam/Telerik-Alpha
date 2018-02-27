const getPoint = (args) => {
    const [x, y] = [args[0], args[1]].map(Number);
    const distance = (x - 1) * (x - 1) + (y - 1) * (y - 1);
    const answer = { circle: 'outside', rectangle: 'outside' };

    if (distance <= 1.5 * 1.5) {
        answer.circle = 'inside';
        if ((y <= 1 && y >= -1) && (x <= 5 && x >= -1)) {
            answer.rectangle = 'inside';
        }
    } else if ((y <= 1 && y >= -1) && (x <= 5 && x >= -1)) {
        answer.rectangle = 'inside';
    }

    return `${answer.circle} circle ${answer.rectangle} rectangle`;
};
getPoint(['2.5', '2']);
getPoint(['0', '1']);
getPoint(['2.5', '1']);
getPoint(['1', '2']);
