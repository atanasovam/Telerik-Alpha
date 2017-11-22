function solve(args) {
    args = args.map(Number);
    let f = args.splice(0, 4),
        s = args.splice(0, 4),
        t = args.splice(0, 4),
        resultDist;

    let distances = [distanceBetweenPoints(f), distanceBetweenPoints(s), distanceBetweenPoints(t)];

    resultDist = round(distances)
    console.log(resultDist.join('\n'));

    console.log(isInside(distances));

    function isInside(dists) {
        if (dists[0] + dists[1] > dists[2] && dists[0] + dists[2] > dists[1] && dists[1] + dists[2] > dists[0]) {
            return "Triangle can be built";
        } else {
            return 'Triangle can not be built';
        }
    }
    function distanceBetweenPoints(arr) {
        let [x1, y1, x2, y2] = [arr[0], arr[1], arr[2], arr[3]];
        let pointA = { x: x1, y: y1 };
        let pointB = { x: x2, y: y2 };

        let distanceX = Math.pow(pointA.x - pointB.x, 2);
        let distanceY = Math.pow(pointA.y - pointB.y, 2);

        return Math.sqrt(distanceX + distanceY);
    }
    function round(arr) {
        let result = [];
        arr = arr.map(e => +e.toFixed(2));

        for (i = 0; i < arr.length; i += 1) {
            if (arr[i] === parseInt(arr[i])) {
                result.push(arr[i] + '.00');
            } else if ((arr[i] % 10).length == 2) {
                result.push(arr[i] + '0');
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    }
}
solve([
    '5', '6', '7', '8',
    '1', '2', '3', '4',
    '9', '10', '11', '12'
]);
solve([
    '7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
]);