const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const planarCoordinates = () => {
    const isInside = (dists) => {
        if (dists[0] + dists[1] > dists[2]
            && dists[0] + dists[2] > dists[1] &&
            dists[1] + dists[2] > dists[0]) {
            return 'Triangle can be built';
        }
        return 'Triangle can not be built';
    };

    const distanceBetweenPoints = (arr) => {
        const [x1, y1, x2, y2] = [arr[0], arr[1], arr[2], arr[3]];
        const pointA = { x: x1, y: y1 };
        const pointB = { x: x2, y: y2 };

        const distanceX = Math.pow(pointA.x - pointB.x, 2);
        const distanceY = Math.pow(pointA.y - pointB.y, 2);

        return Math.sqrt(distanceX + distanceY);
    };

    const round = (arr) => {
        const result = [];
        arr = arr.map((e) => +e.toFixed(2));

        for (let i = 0; i < arr.length; i += 1) {
            result.push(arr[i].toFixed(2));
        }
        return result;
    };

    const args = gets().map(Number);
    const f = args.splice(0, 4);
    const s = args.splice(0, 4);
    const t = args.splice(0, 4);

    const distances = [
        distanceBetweenPoints(f),
        distanceBetweenPoints(s),
        distanceBetweenPoints(t),
    ];

    const resultDist = round(distances);

    print(resultDist.join('\n'));

    print(isInside(distances));
};
planarCoordinates();
