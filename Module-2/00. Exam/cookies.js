const tests = require('./../../gest-print');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const eatCookies = () => {
    let pacagesCount = +gets();
    const pacages = [gets().split(' ').map(Number)];

    let days = 0;
    pacages.push([pacages[0][1]]);
    let trueVals = 0;
    while (pacages[0].length > 2) {
        pacagesCount = pacages.length;
        for (let i = 1; i < pacages[0].length; i += 1) {
            if (pacages[0][i - 1] >= pacages[0][i]) {
                pacages[1].push(pacages[0][i]);
            } else {
                trueVals += 1;
            }
        }
        pacages[0] = pacages[1];
        if (pacagesCount === pacages[0].length || trueVals === 0) {
            print(days);
            return;
        }
        days += 1;
        pacages[1] = [pacages[0][1]];
        trueVals = 0;
        pacages[1] = [];
    }
    print(days);
};
eatCookies();
