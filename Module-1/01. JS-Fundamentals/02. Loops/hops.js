const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const calculate = (() => {
    const move = (stepsToMake, directionIndex, currentIndex, isPositive) => {
        let index = 0;

        if (isPositive) {
            index = currentIndex + stepsToMake;
        } else {
            index = currentIndex - (stepsToMake * (-1));
        }
        if (carrotsPath[index][1] === true) {
            return false;
        }

        eatenPerDirection[directionIndex] += carrotsPath[index][0];
        carrotsPath[index][1] = true;

        return index;
    };

    let carrotsPath = gets()
        .split(', ')
        .map((e) => [+e, false]);

    const directions = +gets();

    const directionsTokens = Array.from(
        { length: directions },
        (x) => gets().split(', ').map(Number)
    );
    const eatenPerDirection = Array.from(
        { length: directions },
        (x) => 0
    );

    for (let d = 0; d < directions; d++) {
        carrotsPath[0][1] = true;

        const directionsArr = directionsTokens[d];
        let carrot = 0;

        for (const direction of directionsArr) {
            if (
                direction >= 0 && carrot + direction < carrotsPath.length
            ) {
                carrot = move(direction, d, carrot, true);
            } else if (
                direction < 0 && carrot - (direction * (-1)) >= 0
            ) {
                carrot = move(direction, d, carrot, false);
            } else {
                break;
            }

            if (carrot === false) {
                break;
            }
        }

        eatenPerDirection[d] += carrotsPath[0][0];
        carrotsPath = carrotsPath.map((x) => [x[0], false]);
    }

    print(Math.max(...eatenPerDirection));
})();
